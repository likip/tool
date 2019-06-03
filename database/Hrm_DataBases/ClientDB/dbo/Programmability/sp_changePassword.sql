CREATE PROCEDURE [dbo].[sp_changePassword]                   
@UserId UNIQUEIDENTIFIER,            
@Result VARCHAR(6) OUT            
                        
AS                   
BEGIN                    
                    
 DECLARE                           
  @LoginId INT,                    
  @MaximumRetainPassword INT,                        
  @CountPwds INT,                
  @PwdHisID INT,                
  @Date DATETIME                  
                                 
                    
 select @LoginId = LoginId from [dbo].[UserLogin] where UserId = @UserId                    
 Select @MaximumRetainPassword =[PasswordRetention] from [dbo].[PasswordRule]                
 Select @CountPwds = COUNT(*) FROM [dbo].[PasswordHistory] WHERE IsActive=1 and LoginId = @LoginId                 
 Select @PwdHisID= (SELECT TOP 1 PasswordHistoryId FROM [dbo].[PasswordHistory] WHERE IsActive=1 and LoginId=@LoginId)                
                             
   SET @Date=(SELECT CASE WHEN (SELECT LastPwdChangedOn FROM [dbo].[UserLogin]                  
WHERE LoginId=@LoginId and IsActive=1 and UserId=@UserId) IS NULL THEN (SELECT CreatedOn FROM [dbo].[UserLogin] (NOLOCK) WHERE                   
LoginId=@LoginId and IsActive=1 and UserId=@UserId) ELSE (SELECT LastPwdChangedOn FROM [dbo].[UserLogin] (NOLOCK)                   
WHERE LoginId=@LoginId and IsActive=1 and UserId=@UserId) END AS Date)                        
                      
  --CHEKING USER EXISTS OR NOT                    
 IF EXISTS (SELECT 1 FROM [dbo].[User] WHERE UserId = @UserId AND IsActive = 1)                    
      BEGIN                    
          --CHECKING THE OLD PASSWORD IS CORRECT                       
 SELECT U.UserId AS 'UserId'                
       ,U.UserName AS 'UserName'                
       ,UL.LoginId AS 'LoginId'        
       ,UL.PasswordHash AS 'PasswordHash'              
       ,UL.CreatedBy AS 'CreatedBy'              
       ,UL.LastUpdatedBy AS 'LastUpdatedBy'                
       ,@MaximumRetainPassword AS 'MaximumRetainPassword'                  
       ,@countPwds AS 'CountPwds'                
       ,@pwdHisID AS 'PwdHisID'                
       ,@Date AS 'Date'                
     FROM [dbo].[User] U LEFT JOIN [dbo].[UserLogin] UL ON U.UserId = UL.UserId    
  --JOIN [dbo].[LoginType] LT ON U.LoginTypeId = LT.LoginTypeId             
     WHERE U.UserId = @UserId AND U.IsActive = 1                
   SET @Result = '1'            
END                
     ELSE                
      BEGIN                
         SET @Result = '006' -- No user exists                     
      END                    
                
END 
