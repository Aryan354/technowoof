import React from 'react';
import Hero from "../Component/Hero";
import Banner from "../Component/Banner"
import ProductContainer from '../Component/ProductContainer';
import {Link} from "react-router-dom";

const Review = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Reviews" subtitle="Scroll below to search for your specified product. Click here to return to home page ">
                <Link to="/" className="btn-primary">
                Return Home
              </Link>
        </Banner>
        </Hero>
        <ProductContainer/>
        </>
    )
};

export default Review
