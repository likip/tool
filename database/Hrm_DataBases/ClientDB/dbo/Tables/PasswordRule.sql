CREATE TABLE [dbo].[PasswordRule] (
    [PwdMgmtId]                      INT       IDENTITY (1, 1) NOT NULL PRIMARY KEY,
    [MaxWrongAttempt]                INT       NOT NULL,
    [MaxPasswordLength]              INT       NULL,
    [MinPasswordLength]              INT       NULL,
    [IsSpecialCharReq]               BIT       NULL,
    [AllowedSpecialChar]             CHAR (20) NULL,
    [IsNumericReq]                   BIT       NULL,
    [AllowedNumeric]                 CHAR (10) NULL,
    [IsUpperCaseReq]                 BIT       NULL,
    [IsLowerCaseReq]                 BIT       NULL,
    [PasswordExpiryDuration]         INT       NULL,
    [PasswordExpiryAlertStartBefore] INT       NULL,
    [PasswordRetention]              INT       NULL,
    [IsActive]      BIT           NOT NULL DEFAULT 1,
    [CreatedBy]     UNIQUEIDENTIFIER           NOT NULL,
    [CreatedOn]     DATETIME      NOT NULL DEFAULT (getutcdate()),
    [LastUpdatedBy] UNIQUEIDENTIFIER           NULL,
    [LastUpdatedOn] DATETIME      NULL,
	CONSTRAINT [FK_PasswordRule_User_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [User]([UserId]), 
    CONSTRAINT [FK_PasswordRule_User_LastUpdatedBy] FOREIGN KEY ([LastUpdatedBy]) REFERENCES [User]([UserId])
);

