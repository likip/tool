CREATE TABLE [dbo].[Client] (
    [ClientId]      UNIQUEIDENTIFIER    NOT NULL DEFAULT newid(),
    [ClientName]    NVARCHAR (255) NOT NULL UNIQUE,
    [IsActive]      BIT            CONSTRAINT [DF_Client_IsActive] DEFAULT ((1)) NOT NULL,
    [CreatedBy]     UNIQUEIDENTIFIER            NOT NULL,
    [CreatedOn]     DATETIME       CONSTRAINT [DF_Client_CreatedOn] DEFAULT (getutcdate()) NOT NULL,
    [LastUpdatedBy] UNIQUEIDENTIFIER            NULL,
    [LastUpdatedOn] DATETIME       NULL,
    CONSTRAINT [PK_Client] PRIMARY KEY NONCLUSTERED ([ClientId] ASC),
	CONSTRAINT [FK_Client_SuperAdminUser_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [SuperAdminUser]([AdminUserId]),
	CONSTRAINT [FK_Client_SuperAdminUser_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [SuperAdminUser]([AdminUserId])
);

