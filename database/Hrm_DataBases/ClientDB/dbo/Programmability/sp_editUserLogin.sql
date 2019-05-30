CREATE PROCEDURE [dbo].[sp_editUserLogin]
@UserId UNIQUEIDENTIFIER,      
@UserName NVARCHAR(100),            
@PwdHisId INT,      
@LoginId INT,            
@PasswordHash NVARCHAR(300),      
@NewPasswordHash NVARCHAR(300),                  
@Date DATETIME,            
@CreatedBy UNIQUEIDENTIFIER,            
@LastUpdatedBy UNIQUEIDENTIFIER,  
@Result VARCHAR(6) OUT        
AS      
BEGIN TRY     
      
 DECLARE @Count INT;  
 IF EXISTS(SELECT 1 FROM [dbo].[User] U,[dbo].[UserLogin] UL where U.UserName = @UserName AND U.IsActive = 1)          
     BEGIN   
 IF(@PwdHisId>0)      
  BEGIN     
   BEGIN TRAN   
      
   UPDATE [dbo].[PasswordHistory] Set IsActive = 0            
   WHERE PasswordHistoryId = @PwdHisId   
    SET @COUNT = @@ROWCOUNT       
       
   INSERT INTO PasswordHistory(LoginId,PasswordHash,IsActive,CreatedOn,CreatedBy,LastUpdatedBy,LastUpdatedOn)            
   VALUES(@LoginId,@PasswordHash,1,@Date,@CreatedBy,@LastUpdatedBy,@Date)      
    SET @COUNT = @@ROWCOUNT  
  
    UPDATE [dbo].[UserLogin]             
    Set PasswordHash = @NewPasswordHash            
    ,LastUpdatedBy = LastUpdatedBy            
    ,LastUpdatedOn = GETUTCDATE()            
    ,LastPwdChangedOn = GETUTCDATE()            
    ,InCorrectAttempts = 0, ChangePasswordOnNextLogin = 0             
    WHERE UserId = @UserId             
    and IsActive = 1 and LoginId =@LoginId      
     
     SET @COUNT = @COUNT+@@ROWCOUNT                   
   IF(@COUNT<3)          
     BEGIN          
     ROLLBACK TRAN          
     SET @Result = '014'          
   END           
     ELSE          
    BEGIN          
    SET @Result = '010'          
    COMMIT TRAN         
    END                           
   END      
      
 ELSE      
  BEGIN   
   BEGIN TRAN     
   INSERT INTO PasswordHistory(LoginId,PasswordHash,IsActive,CreatedOn,CreatedBy,LastUpdatedBy,LastUpdatedOn)            
   VALUES(@LoginId,@PasswordHash,1,@Date,@CreatedBy,@LastUpdatedBy,@Date)   
    SET @COUNT =@@ROWCOUNT      
       
     UPDATE [dbo].[UserLogin]             
     Set PasswordHash = @NewPasswordHash            
     ,LastUpdatedBy = @UserId            
     ,LastUpdatedOn = GETUTCDATE()            
     ,LastPwdChangedOn = GETUTCDATE()            
     ,InCorrectAttempts = 0, ChangePasswordOnNextLogin = 0             
     WHERE UserId = @UserId             
     and IsActive = 1 and LoginId =@LoginId      
      SET @COUNT =@COUNT+@@ROWCOUNT    
     IF(@COUNT<2)          
        BEGIN          
        ROLLBACK TRAN          
        SET @Result = '014'           
       END          
       ELSE          
      BEGIN          
      SET @Result = '010'           
      COMMIT TRAN          
       END          
     END             
     END          
  ELSE          
   BEGIN          
   SET @Result = '006'          
  END              
END TRY        
        
BEGIN CATCH                          
   --operation failed                                                    
   SET @Result = '014'                
         ROLLBACK                          
 END CATCH

