import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty({ message: 'Product name is required' })
    @IsString({ message: 'Product name must be a string' })
    name: string;

    @IsNotEmpty({ message: 'Product price is required' })
    @IsNumber({}, { message: 'Product price must be a number' })
    price: number;
}
