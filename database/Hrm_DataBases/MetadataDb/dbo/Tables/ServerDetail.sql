CREATE TABLE [dbo].[ServerDetail]
(
	[ServerId] INT IDENTITY (1,1) NOT NULL PRIMARY KEY, 
    [ServerName] VARCHAR(50) NOT NULL, 
    [ServerIp] VARCHAR(50) NOT NULL, 
    [ServerRoleId] INT NOT NULL,
	[IsActive]      BIT           DEFAULT 1 NOT NULL,
    [CreatedOn]     DATETIME      DEFAULT (getutcdate()) NOT NULL,
    [CreatedBy]     UNIQUEIDENTIFIER           NOT NULL,
    [LastUpdatedBy] UNIQUEIDENTIFIER           NULL,
    [LastUpdatedOn] DATETIME      NULL,    
    CONSTRAINT [FK_Server_SuperAdminUser_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SuperAdminUser] ([AdminUserId]),
    CONSTRAINT [FK_Server_SuperAdminUser_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [dbo].[SuperAdminUser] ([AdminUserId]), 
    CONSTRAINT [FK_Server_ServerRole_ServerRoleId] FOREIGN KEY ([ServerRoleId]) REFERENCES [ServerRole]([ServerRoleId])
    
)
