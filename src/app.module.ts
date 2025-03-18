import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productController } from './Products/Controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './Products/Services/product.service';
import { Product } from './Products/Entity/product.entity';
import { ProductsModule } from './Products/products.module';
import { EncryptionService } from './encryption.service';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5435,
    username: 'postgres', 
    password: '12345678', 
    database: 'ecommerce',
    entities: [Product],
    synchronize: true, 
  }),ProductsModule],


})
export class AppModule { }
