import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {MyState} from "../MyState";

class CartCount extends React.Component {
    constructor(props) {
        super(props);
        MyState.Cart.Component = this;
    }

    handleDelete(item){
        MyState.Cart.removeOrder(item);
        this.forceUpdate();
    }

    render() {
        return <i>{MyState.Cart.Orders.length}</i>
    }
}

CartCount.defaultProps = {};

export default CartCount;
