import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import {MyState} from "../MyState";


function ProductPage() {
    const location = useLocation()
    const { Id, Label, Desc, Price, Image } = location.state;
    return (
        <div className={'row mt-5 border p-5'}>
            <div className={'col-6'}>
                <img src={Image} className={'img-fluid'}/>
            </div>
            <div className={'col-6 '}>
                <h2>{Label}</h2>
                <p>{Desc}</p>
                <div>Price: {Price}</div>

                <br/>
                <button onClick={()=>{MyState.Cart.addOrder(location.state);}} className={'btn btn-primary btn-block fs-6'}>
                    <span className={'bi bi-cart-plus fs-2'}/> Add To Card
                </button>

                <Link className={'btn text-secondary float-end'} to={'/'}>
                    <span className={'bi bi-none fs-2'}/>Return</Link>
            </div>
        </div>
    );
}

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

export default ProductPage;
