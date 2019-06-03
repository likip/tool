CREATE TABLE [dbo].[UserRoleMap]
(
	[UserRoleMapId] INT IDENTITY (1,1) NOT NULL PRIMARY KEY, 
    [UserId] UNIQUEIDENTIFIER NOT NULL,
    [RoleId] INT NOT NULL,
	[IsActive]      BIT           DEFAULT 1 NOT NULL,
    [CreatedOn]     DATETIME      DEFAULT (getutcdate()) NOT NULL,
    [CreatedBy]     UNIQUEIDENTIFIER           NOT NULL,
    [LastUpdatedBy] UNIQUEIDENTIFIER           NULL,
    [LastUpdatedOn] DATETIME      NULL,    
    CONSTRAINT [FK_UserRoleMap_User_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[User] ([UserId]),
    CONSTRAINT [FK_UserRoleMap_User_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [dbo].[User] ([UserId]), 
    CONSTRAINT [FK_UserRoleMap_User_UserId] FOREIGN KEY ([UserId]) REFERENCES [User]([UserId]), 
    CONSTRAINT [FK_UserRoleMap_Role_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [Role]([RoleId])
)
