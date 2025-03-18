import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './Services/product.service';
import { ProductsRepository } from './Repository/product.repo';
import { Product } from './Entity/product.entity';
import { productController } from './Controllers/product.controller';
import { EncryptionService } from 'src/encryption.service';
import { EncryptionModule } from 'src/encryption.module';


@Module({
  imports: [TypeOrmModule.forFeature([Product])], 
  controllers: [productController],
  providers: [ProductsService, ProductsRepository,EncryptionService],
  exports: [ProductsService, TypeOrmModule,EncryptionService], 
})
export class ProductsModule {}
