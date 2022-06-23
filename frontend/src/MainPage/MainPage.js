import React, {useEffect, useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardImage,
    MDBCardTitle,
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselElement,
    MDBCarouselInner,
    MDBCarouselItem, MDBCol, MDBRow,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import {MyState} from "../MyState";

function getMdbCarouselItem(Id, Label, Desc, Price, Image, Active) {
    return <Link key={Id} to={'/product'} state={{ Id, Label, Desc, Price, Image }} >
        <MDBCarouselItem className={Active ? 'active' : ''}>
            <MDBCarouselElement src={Image} alt={Desc}/>
            <MDBCarouselCaption>
                <h5>{Label}</h5>
                <p>{Desc}</p>
            </MDBCarouselCaption>
        </MDBCarouselItem>
    </Link>;
}

function GetOneProductCard(Id, Label, Desc, Price, Image) {
    return <MDBCol>
        <MDBCard key={Id} className={'h-100'}>
        <Link to={'/product'} state={{ Id, Label, Desc, Price, Image }} className={'text-decoration-none'}>
        <MDBCardImage src={Image} alt='...' position='top'/>
        <MDBCardBody>
            <MDBCardTitle>
                <div state={{ Id, Label, Desc, Price, Image }} className={'link-danger text-decoration-none fs-6'} >
                    {Label}
                </div>
                <small className='text-muted float-end'>Price {Price}</small>
            </MDBCardTitle>
            {/*<MDBCardText className={'small text-secondary'}>
                {Desc}
            </MDBCardText>*/}
        </MDBCardBody>
        {/*<MDBCardFooter>
            <small className='text-muted'>Price {Price}</small>
        </MDBCardFooter>*/}
        </Link>
    </MDBCard>
    </MDBCol>;
}

MainPage.propTypes = {};

function MainPage(props) {
    let first = 0;
    let products = [...MyState.Product.Products];
    switch(props.filter){
        case 'WOMEN': products = products.filter(p=>p.Gender==='WOMEN');break;
        case 'MEN': products = products.filter(p=>p.Gender==='MEN');break;
        case 'KIDS': products = products.filter(p=>p.Kids);break;
        case 'NEW': products = products.filter(p=>p.New);
    }
    return <>
        <MDBCarousel showIndicators showControls fade className={'my-2'}>
            <MDBCarouselInner>
                {
                    products.map((product) => {
                        first++;
                        return getMdbCarouselItem(
                            product.Id,
                            product.Label,
                            product.Desc,
                            product.Price,
                            product.Image,
                            first === 1
                        )
                    })
                }
            </MDBCarouselInner>
        </MDBCarousel>
        <br/>
        <h3 className={'text-center'}>Products</h3>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            {products.map((product) => {
                return GetOneProductCard(
                    product.Id,
                    product.Label,
                    product.Desc,
                    product.Price,
                    product.Image,
                )
            })}
        </MDBRow>
    </>;
}

MainPage.defaultProps = {};

export default MainPage;
