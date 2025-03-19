import { Controller, Get, Post, Body, UseGuards,UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from 'src/Products/Services/product.service';
import { EncryptionService } from 'src/encryption.service';
import { JwtAuthGuard } from 'src/jwt-auth.guard';
import { CreateProductDto } from '../dto/product-dto';


@Controller('products')
export class productController {
    constructor(private readonly ProductService: ProductsService, private readonly encryptionService: EncryptionService) { }


    @UseGuards(JwtAuthGuard)
    @Get('productsList')
    async getAllProducts() {
        const products= await this.ProductService.getProductsList();
        return products.map(product => ({
            ...product,
            name: this.encryptionService.decrypt(product.name),
            price: parseFloat(this.encryptionService.decrypt(product.price)),
        }));
    }
    @UseGuards(JwtAuthGuard)
    @Post('create')
    @UsePipes(new ValidationPipe({ whitelist: true })) 
    async createProduct(@Body() body: CreateProductDto) {
        console.log('Received Request Data:', body);
        const encryptedName = this.encryptionService.encrypt(body.name);
        console.log('Received Request encryptedName:', encryptedName);
        const encryptedPrice = this.encryptionService.encrypt(body.price.toString());
        console.log('Received Request encryptedPrice:', encryptedPrice);
    
        const savedProduct = await this.ProductService.createProduct(encryptedName, encryptedPrice);
    
        const decryptedProduct = {
            id: savedProduct.id,
            name: this.encryptionService.decrypt(savedProduct.name),
            price: parseFloat(this.encryptionService.decrypt(savedProduct.price)),
        };
    
        console.log('Decrypted Response:', decryptedProduct);
    
        return decryptedProduct;
    }
    
}

