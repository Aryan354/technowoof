import React from 'react';
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
//import {Link} from 'react-router-dom';

function Laptop() {
    return (
        <Hero hero= "roomsHero">
        <Banner title= "Laptops" 
        subtitle = "Click here for Latest, Bleeding-Edge Laptop Reviews"> 
        
        </Banner>
        
        </Hero>
    );
}

export default Laptop
