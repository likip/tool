 CREATE PROCEDURE [dbo].[sp_authenticateUser]                                                      
 @UserName NVARCHAR(50),              
@Result VARCHAR(6) Out              
AS                                              
BEGIN -- Begin Stored procedure                                               
 DECLARE                                               
  @IncorrectPasswordAttemptConfig INT,                      
  @PasswordExpiryDuration INT                                              
                                
                            
  SELECT @IncorrectPasswordAttemptConfig = MaxWrongAttempt,                      
   @PasswordExpiryDuration=PasswordExpiryDuration                       
   FROM [dbo].[PasswordRule] WHERE IsActive = 1                   
                                 
                      
   IF EXISTS(select 1                                            
   FROM [dbo].[User]                             
   WHERE UserName = @UserName AND IsActive = 1                                            
  )                          
 BEGIN                                                          
 SELECT DISTINCT        
  UL.UserId AS 'UserId'                          
 ,U.UserName AS 'UserName'                  
 ,U.FirstName AS 'FirstName'              
 ,U.LastName AS 'LastName'         
 ,URM.RoleId AS 'RoleId'        
 ,R.RoleName AS 'RoleName'           
      
 ,UL.PasswordHash AS 'PasswordHash'                            
                           
 ,UL.IncorrectAttempts AS 'IncorrectPasswordAttempt'                          
 ,UL.IsLocked AS 'IsLocked'                     
 ,UL.ChangePasswordOnNextLogin as 'ChangePasswordOnNextLogin'                            
 ,U.IsEulaAccepted AS 'EulaResult'                            
 ,@IncorrectPasswordAttemptConfig AS 'IncorrectPasswordAttemptConfig'                      
 ,UL.LastPwdChangedOn AS 'LastPwdChangedOn'                      
 ,@PasswordExpiryDuration AS 'PasswordExpiryDuration'                      
 ,DATEDIFF(DAY,LastPwdChangedOn,GETDATE()) AS DateDiff                             
                                                 
  FROM [dbo].[User] U LEFT JOIN [dbo].[UserLogin] UL ON U.UserId = UL.UserId
  LEFT JOIN [UserRoleMap] URM ON U.UserId = URM.UserId LEFT JOIN [Role] R ON URM.RoleId = R.RoleId   
   
  WHERE U.UserName = @UserName AND U.IsActive = 1                 
   SET @Result = '1'               
              
  END                             
                                     
 ELSE                            
 BEGIN                              
 SET @Result = '006'  --User doesn't exists            
  END                    
END
