import React from 'react';
import {useLocation} from "react-router-dom";
import {MyState} from "../MyState";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(item){
        MyState.Cart.removeOrder(item);
        this.forceUpdate();
    }

    render() {
        return (
            <ol>
                <h1>{MyState.Cart.Orders.length}</h1>
                {
                    MyState.Cart.Orders.map(orderItem=>{
                        return (
                            <li>
                                {orderItem.Label}
                                <br/>
                                {orderItem.Price}
                                <br/>
                                <button onClick={()=>{this.handleDelete(orderItem)}}>Delete</button>
                            </li>
                        )
                    })
                }
                <button onClick={()=>{this.handleAdd({Label:'New', Price: 100})}}>Add</button>
            </ol>
        )
    }
}

Cart.defaultProps = {};

export default Cart;
