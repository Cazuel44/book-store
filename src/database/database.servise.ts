import { TypeOrmModule } from '@nestjs/typeorm';
import { Configurations } from 'src/config/config.keys';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { ConnectionOptions } from 'tls';


export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService){
            return {
                ssl: true,
                type: 'postgres' as 'postgres',
                host: config.get(Configurations.HOST),
                username: config.get(Configurations.USERNAME),
                password: config.get(Configurations.PASSWORD),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
            } as ConnectionOptions;
        },
    }),
];