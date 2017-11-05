CREATE TABLE [dbo].[CurrentCounter] (
    [Id]      INT NOT NULL,
    [Counter] INT DEFAULT ((0)) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

