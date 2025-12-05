import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfiguration } from './config/env.config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envConfiguration().dbHost,
      port: envConfiguration().dbPort,
      username: envConfiguration().dbUsername,
      password: envConfiguration().dbPassword,
      database: envConfiguration().dbName,
      autoLoadEntities: true,
      synchronize: envConfiguration().environment != 'prod' ? true : false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
