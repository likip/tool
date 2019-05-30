CREATE TABLE [dbo].[SuperAdminUser] (
    [AdminUserId]        UNIQUEIDENTIFIER            NOT NULL DEFAULT newid(),
    [ProfileName]   NVARCHAR (255) NOT NULL,
    [IsActive]      BIT            CONSTRAINT [DF_SuperAdminUser_IsActive] DEFAULT ((1)) NOT NULL,
    [CreatedBy]     UNIQUEIDENTIFIER            NULL,
    [CreatedOn]     DATETIME       CONSTRAINT [DF_SuperAdminUser_CreatedOn] DEFAULT (getutcdate()) NOT NULL,
    [LastUpdatedBy] UNIQUEIDENTIFIER            NULL,
    [LastUpdatedOn] DATETIME       NULL, 
    CONSTRAINT [PK_SuperAdminUser] PRIMARY KEY NONCLUSTERED ([AdminUserId]), 
    CONSTRAINT [FK_SuperAdminUser_SuperAdminUser_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [SuperAdminUser]([AdminUserId])
);

