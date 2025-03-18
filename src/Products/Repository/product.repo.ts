import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../Entity/product.entity';

@Injectable()
export class ProductsRepository {
  prisma: any;
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) { }

  async findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async createProduct(name: string, price: string): Promise<Product> {
    const product = this.productRepo.create({ name, price });
    return await this.productRepo.save(product);
  }
}
