CREATE PROCEDURE sp_verifyNewPwd            
@UserName varchar(50)        
AS         
BEGIN        
        
DECLARE @Loginid INT        
        
SELECT @Loginid = LoginId from [dbo].[UserLogin] UL,[dbo].[User] U where U.UserName = @userName AND U.UserId = UL.UserId AND U.IsActive = 1       
        
SELECT PasswordHash as 'PasswordHash' from PasswordHistory        
WHERE LoginId = @Loginid AND IsActive = 1       
        
END
