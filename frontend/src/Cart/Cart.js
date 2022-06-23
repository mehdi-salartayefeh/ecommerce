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
        let sum = MyState.Cart.Orders.reduce((previousValue, currentValue) => previousValue+ +currentValue.Price , 0)
        return (
            <>
                <ol>
                    <header className={'text-blue fs-3'}>{MyState.Cart.Orders.length} item{MyState.Cart.Orders.length>1?'s':''} selected</header>
                    {
                        MyState.Cart.Orders.map(orderItem=>{
                            return (
                                <li key={orderItem.Id} className={'row my-2 p-2 border bg-light'}>
                                    <img className={'img-fluid col-3'} src={orderItem.Image}/>
                                    <div className={'col-9'}>
                                        {orderItem.Label}
                                        <br/>
                                        <small className={'text-secondary'}>{orderItem.Desc}</small>
                                        <br/>
                                        <b className={'float-end'}>${orderItem.Price}</b>
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

                    <div className={'py-4'}>
                        <Link className={'btn btn-primary btn-lg float-end '+(MyState.Cart.Orders.length===0?'disabled':'')} to={'#'}>
                            Checkout <b>${sum}</b>
                        </Link>
                        <Link className={'btn btn-secondary float-start btn-lg'} to={'/'}>
                            <span className={'bi bi-arrow-up-left'}/>Choose {MyState.Cart.Orders.length>0 ? 'More':'Products'}
                        </Link>
                    </div>
                </ol>


            </>
        )
    }
}

Cart.defaultProps = {};

export default Cart;
