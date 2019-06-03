CREATE TABLE [dbo].[PasswordHistory] (
    [PasswordHistoryId] INT            IDENTITY (1, 1) NOT NULL,
    [LoginId]           INT            NOT NULL,
    [PasswordHash]      NVARCHAR (4000) NOT NULL,
    [IsActive]          BIT            DEFAULT ((1)) NOT NULL,
    [CreatedOn]         DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [CreatedBy]         UNIQUEIDENTIFIER            NOT NULL,
    [LastUpdatedBy]     UNIQUEIDENTIFIER            NULL,
    [LastUpdatedOn]     DATETIME       NULL,
    CONSTRAINT [PK_PasswordHistory] PRIMARY KEY CLUSTERED ([PasswordHistoryId] ASC),
    CONSTRAINT [FK_PasswordHistory_Users_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[User] ([UserId]),
    CONSTRAINT [FK_PasswordHistory_Users_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [dbo].[User] ([UserId]),
    CONSTRAINT [FK_PasswordHistory_Users_UserKey] FOREIGN KEY ([LoginId]) REFERENCES [dbo].[UserLogin] ([LoginId])
);

