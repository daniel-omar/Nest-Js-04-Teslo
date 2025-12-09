import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfiguration } from './config/env.config';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';


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
    ProductsModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { 
  constructor() { 
    console.log('DB Host: ', envConfiguration());
  }
}
