CREATE TABLE [dbo].[ServerRole]
(
	[ServerRoleId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [ServerRoleName] VARCHAR(50) UNIQUE NOT NULL,
	[IsActive]      BIT           DEFAULT 1 NOT NULL,
    [CreatedOn]     DATETIME      DEFAULT (getutcdate()) NOT NULL,
    [CreatedBy]     UNIQUEIDENTIFIER           NOT NULL,
    [LastUpdatedBy] UNIQUEIDENTIFIER           NULL,
    [LastUpdatedOn] DATETIME      NULL,    
    CONSTRAINT [FK_ServerRole_SuperAdminUser_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SuperAdminUser] ([AdminUserId]),
    CONSTRAINT [FK_ServerRole_SuperAdminUser_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [dbo].[SuperAdminUser] ([AdminUserId]), 
    
)
