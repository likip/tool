CREATE Procedure [dbo].[sp_getClientExistence]        
@ClientName NVARCHAR(255),
@Result VARCHAR(6) OUT
AS       
BEGIN  
	IF EXISTS(SELECT 1 FROM [dbo].[Client] WHERE ClientName = @ClientName AND IsActive = 1)
	 BEGIN
		SELECT C.ClientId,C.ClientName,D.DatabaseName,D.Connectionstring 
		FROM [dbo].[Client] C INNER JOIN [dbo].[DatabaseDetail] D ON D.ClientId = C.CLientId AND C.IsActive = 1 AND D.IsActive = 1   
		WHERE C.ClientName = @clientName    
		 SET @Result ='001'
    END
	ELSE
	 BEGIN
	 SET @Result = '002'
    END

END