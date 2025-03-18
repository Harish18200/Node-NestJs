import { DataSource } from 'typeorm';
import { Product } from '../products/Entity/product.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'postgres',
  password: '12345678',
  database: 'ecommerce',
  entities: [Product],
  migrations: ['dist/migrations/*.js'], 
  synchronize: false, 
  logging: true,
});
