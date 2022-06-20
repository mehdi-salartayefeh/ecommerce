import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardGroup,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselElement,
    MDBCarouselInner,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import {faker} from "@faker-js/faker";

function getMdbCarouselItem(Id, Label, Desc, Price, Image, Active) {
    return <Link to={'/product'} state={{ Id, Label, Desc, Price, Image }} >
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
    return <MDBCard>
        <Link to={'/product'} state={{ Id, Label, Desc, Price, Image }} className={'text-decoration-none'}>
        <MDBCardImage src={Image} alt='...' position='top'/>
        <MDBCardBody>
            <MDBCardTitle>
                <Link to={'/product'} state={{ Id, Label, Desc, Price, Image }} className={'link-danger text-decoration-none fs-6'} >
                    {Label}
                </Link>
            </MDBCardTitle>
            <MDBCardText className={'small text-secondary'}>
                {Desc}
            </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
            <small className='text-muted'>Price {Price}</small>
        </MDBCardFooter>
        </Link>
    </MDBCard>;
}

MainPage.propTypes = {};

function MainPage() {
    return <>
        <MDBCarousel showIndicators showControls fade className={'my-2'}>
            <MDBCarouselInner>
                {
                    [1, 2, 3, 4].map((product) => {
                        return getMdbCarouselItem(
                            0,
                            faker.commerce.productName(),
                            faker.commerce.productDescription(),
                            faker.commerce.price(),
                            faker.image.food(400, 200, true),
                            product === 1
                        )
                    })
                }
            </MDBCarouselInner>
        </MDBCarousel>
        <MDBCardGroup className={'my-2'}>
            {[1, 2, 3, 4].map((product) => {
                return GetOneProductCard(
                    0,
                    faker.commerce.productName(),
                    faker.commerce.productDescription(),
                    faker.commerce.price(), 
                    faker.image.food(400, 200, true)
                )
            })}
        </MDBCardGroup>
    </>;
}

MainPage.defaultProps = {};

export default MainPage;
