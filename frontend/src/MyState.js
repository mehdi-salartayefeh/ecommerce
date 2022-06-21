//MyState

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
        productsLoaded : false,
        Products: [],
        loadProducts(){
            const apiUrl = `http://localhost:3001/product`;
            return fetch(apiUrl, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then((res) => res.json())
                .then((products) => {
                    this.Products = products;
                    return products;
                });

        },
        loadProductsOnce(){
            if(!this.productsLoaded) {
                this.productsLoaded = true;
                return this.loadProducts();
            }
        }
    }
};
