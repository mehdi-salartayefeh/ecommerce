import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {faker} from "@faker-js/faker";

@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    let products = [];
    Array.from(Array(17).keys()).map((product)=> {
      products.push({
        Id: Math.random(),
        Label: faker.commerce.productName(),
        Desc: faker.commerce.productDescription(),
        Price: faker.commerce.price(),
        // Image: faker.image.transport(400, 150, true),
        Image: '/images/clothing/women/' + (product + 1) + '.jpg',
        Gender: 'WOMEN',
        Kids: false,
        New: faker.datatype.boolean()
      })
    })

    Array.from(Array(8).keys()).map((product)=>{
      products.push({
        Id: Math.random(),
        Label: faker.commerce.productName(),
        Desc: faker.commerce.productDescription(),
        Price: faker.commerce.price(),
        // Image: faker.image.transport(400, 150, true),
        Image: '/images/clothing/men/'+(product+1)+'.jpg',
        Gender: 'MEN',
        Kids: false,
        New: faker.datatype.boolean()
      })
    })

    Array.from(Array(3).keys()).map((product)=>{
      products.push({
        Id: Math.random(),
        Label: faker.commerce.productName(),
        Desc: faker.commerce.productDescription(),
        Price: faker.commerce.price(),
        // Image: faker.image.transport(400, 150, true),
        Image: '/images/clothing/kids/'+(product+1)+'.jpg',
        //Gender: faker.datatype.boolean()?'WOMEN':'MEN',
        Kids: true,
        New: faker.datatype.boolean()
      })
    })
    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
