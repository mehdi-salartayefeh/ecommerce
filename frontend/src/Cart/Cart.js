import React from 'react';
import {Link, useLocation} from "react-router-dom";
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
            <>
                <ol>
                    <h2 className={'text-secondary'}>{MyState.Cart.Orders.length} items selected</h2>
                    {
                        MyState.Cart.Orders.map(orderItem=>{
                            return (
                                <li key={orderItem.Id} className={'row my-2 p-0 border'}>
                                    <img className={'img-fluid col-3'} src={orderItem.Image}/>
                                    <div className={'col-9'}>
                                        {orderItem.Label}
                                        <br/>
                                        {orderItem.Price}
                                        <br/>
                                        <button className={'btn btn-sm btn-outline-danger float-end'} onClick={()=>{this.handleDelete(orderItem)}}>
                                            <span className={'bi bi-cart-dash fs-6'}/>
                                            &nbsp;
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
                <Link className={'btn text-secondary float-end fs-6'} to={'/'}>
                <span className={'bi bi-return fs-2'}/>Choose More</Link>
            </>
        )
    }
}

Cart.defaultProps = {};

export default Cart;
