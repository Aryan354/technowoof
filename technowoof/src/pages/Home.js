import React from 'react'
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
//import {Link} from "react-router-dom";
import Services from "../Component/Services";
import FeaturedProducts from '../Component/FeaturedProducts';
//import Button from '../Component/StyledHero';
const Home = () => {
    return (
    <>
    <Hero>
        <Banner title= "Welcome to TechnoWoof"
        subtitle= "The Ultimate Destination For All Gadget Enthusiasts. " >
        </Banner>
    </Hero>
    <Services />
    <FeaturedProducts />
    </>
    );
}

export default Home
