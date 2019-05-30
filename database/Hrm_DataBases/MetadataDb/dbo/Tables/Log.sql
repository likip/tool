CREATE TABLE [dbo].[Log] (
      [Id] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,

      [Application] [nvarchar](50) NOT NULL,
      [Logged] [datetime] NOT NULL,
      [Level] [nvarchar](50) NOT NULL,
      [Message] [nvarchar](max) NOT NULL,
      [Logger] [nvarchar](250) NULL,
      [Callsite] [nvarchar](max) NULL,
      [Exception] [nvarchar](max) NULL)
