//MyState
import {faker} from "@faker-js/faker";

export const MyState = {
    Cart : {
        Orders: [],
        Component: null,

        addOrder(product){
            this.Orders.push(product);
            this.Component.forceUpdate();
        },
        removeOrder(product){
            this.Orders = this.Orders.filter(orderItem => orderItem.Label !== product.Label);
            this.Component.forceUpdate();
        }
    },
    Product : {
        Products: [],
        loadProducts(){
            [1,2,3,4,5,6,7,8,9,10].map((product)=>{
                this.Products.push({
                    Id: Math.random(),
                    Label: faker.commerce.productName(),
                    Desc: faker.commerce.productDescription(),
                    Price: faker.commerce.price(),
                    Image: faker.image.transport(400, 150, true),
                    // Image: '/images/shirt ('+product+').jpeg',
                    Gender: faker.datatype.boolean()?'WOMEN':'MEN',
                    Kids: faker.datatype.boolean(),
                    New: faker.datatype.boolean()
                })
            })
        }
    }
};
