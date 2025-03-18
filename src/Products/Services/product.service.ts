import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../Repository/product.repo';
import { Product } from '../Entity/product.entity';


@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  getProductsList(): Promise<Product[]> {
    return this.productsRepository.findAll();
  }

  async createProduct(name: string, price: string): Promise<Product> {
    return this.productsRepository.createProduct(name,price);
}
}
