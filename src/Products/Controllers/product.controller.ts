import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ProductsService } from 'src/Products/Services/product.service';
import { EncryptionService } from 'src/encryption.service';
import { JwtAuthGuard } from 'src/jwt-auth.guard';



@Controller('products')
export class productController {
    constructor(private readonly ProductService: ProductsService) { }
    private readonly encryptionService: EncryptionService

    @UseGuards(JwtAuthGuard)
    @Get('productsList')
    getAllProducts() {
        return this.ProductService.getProductsList();
    }
    @UseGuards(JwtAuthGuard)
    @Post('create')
    createProduct(@Body() body: { name: string; price: number }) {
        console.log('Received Request Data:', body);
        const encryptedName = this.encryptionService.encrypt(body.name);
        console.log('Received Request encryptedName:', encryptedName);
        const encryptedPrice = this.encryptionService.encrypt(body.price.toString()); 
        console.log('Received Request encryptedPrice:', encryptedPrice);
        return this.ProductService.createProduct(encryptedName,encryptedPrice); 
    }
}

