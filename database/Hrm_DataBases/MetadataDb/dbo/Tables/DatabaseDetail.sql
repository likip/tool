CREATE TABLE [dbo].[DatabaseDetail] (
    [DatabaseId]    INT            IDENTITY (1, 1) NOT NULL,
    [DatabaseName]  NVARCHAR (255) NOT NULL UNIQUE,
    [ClientId]      UNIQUEIDENTIFIER            NOT NULL,
	[ServerId]		INT			   NOT NULL,
	[ConnectionString] NVARCHAR(MAX) NOT NULL,
    [IsActive]      BIT            CONSTRAINT [DF_Database_IsActvie] DEFAULT ((1)) NOT NULL,
    [CreatedBy]     UNIQUEIDENTIFIER            NOT NULL,
    [CreatedOn]     DATETIME       CONSTRAINT [DF_Database_CreatedOn] DEFAULT (getutcdate()) NOT NULL,
    [LastUpdatedBy] UNIQUEIDENTIFIER            NULL,
    [LastUpdatedOn] DATETIME       NULL,
    CONSTRAINT [PK_Database] PRIMARY KEY CLUSTERED ([DatabaseId] ASC),
	CONSTRAINT [FK_Database_SuperAdminUser_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [SuperAdminUser]([AdminUserId]),
	CONSTRAINT [FK_Database_SuperAdminUser_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [SuperAdminUser]([AdminUserId]), 
    CONSTRAINT [FK_Database_Client_ClientId] FOREIGN KEY ([ClientId]) REFERENCES [Client]([ClientId]), 
    CONSTRAINT [FK_Database_Server_ServerId] FOREIGN KEY ([ServerId]) REFERENCES [ServerDetail]([ServerId])	
);

