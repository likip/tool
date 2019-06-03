CREATE TABLE [dbo].[Role]
(
	[RoleId] INT IDENTITY (1,1) NOT NULL PRIMARY KEY, 
    [RoleName] NVARCHAR(50) UNIQUE NOT NULL,
	[IsActive]      BIT           DEFAULT 1 NOT NULL,
    [CreatedOn]     DATETIME      DEFAULT (getutcdate()) NOT NULL,
    [CreatedBy]     UNIQUEIDENTIFIER           NOT NULL,
    [LastUpdatedBy] UNIQUEIDENTIFIER           NULL,
    [LastUpdatedOn] DATETIME      NULL,    
    CONSTRAINT [FK_Role_User_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[User] ([UserId]),
    CONSTRAINT [FK_Role_User_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [dbo].[User] ([UserId])
)
