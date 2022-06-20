//MyState
exports.MyState = {
    Cart : {
        Orders: [],

        addOrder(product){
            this.Orders.push(product);
            return true;
        },
        removeOrder(product){
            let filtered = this.Orders.filter(orderItem=>orderItem.label!==product.label);
            this.Orders = filtered;
        }
    }
};
