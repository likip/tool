CREATE TABLE [dbo].[User] (
    [UserId]        UNIQUEIDENTIFIER   NOT NULL DEFAULT newid(),
    [UserName]   NVARCHAR (255) NOT NULL,
  [FirstName]   NVARCHAR (50) NOT NULL,
	[LastName]   NVARCHAR (50) NOT NULL,
  [PrimaryEmailAddress]  NVARCHAR (100) NOT NULL,
	[SecondaryEmailAddress]  NVARCHAR (100) NULL,
  [ManagerEmailAddress]      NVARCHAR(100) NULL,
	[ClientId]  INT NOT NULL,
	[NotificationAlert] BIT NOT NULL DEFAULT 0,
	[IsEulaAccepted] BIT		NOT NULL DEFAULT 0,
    [IsActive]      BIT            CONSTRAINT [DF__Users__IsActive__4F7CD00D] DEFAULT 1 NOT NULL,
    [CreatedBy]     UNIQUEIDENTIFIER            NULL,
    [CreatedOn]     DATETIME       CONSTRAINT [DF__Users__CreatedOn__5070F446] DEFAULT (getutcdate()) NOT NULL,
    [LastUpdatedBy] UNIQUEIDENTIFIER            NULL,
    [LastUpdatedOn] DATETIME       NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY NONCLUSTERED ([UserId] ASC),
    CONSTRAINT [FK_User_User_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [dbo].[User] ([UserId])
    
);

