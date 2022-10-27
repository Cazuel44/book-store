import { Module } from '@nestjs/common';
import { databaseProviders } from './database.servise';

@Module({
    imports: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}
