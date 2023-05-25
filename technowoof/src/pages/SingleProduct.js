import React, { Component } from 'react';
import Banner from '../Component/Banner'
import {Link} from 'react-router-dom';
import {RoomContext} from '../context.js';
import StyledHero from '../Component/StyledHero';
import Comments from '../Component/Comments';

export default class SingleProduct extends Component{
           static contextType = RoomContext;
           
           render() {
    //        let defaultBack=defaultBcg;
         
        let { singleProduct: product} = this.context;
      //  let product=abc[0];
       // console.log(abc);
          if(!product)
         {
             return (
             <div className= "error">
            <h3> no such rooom found</h3>
            <Link to= "/review" className= "btn-primary"> 
            back 
            </Link>
             </div>
             );
         }
         const { name, type, price, images,
      size,
      processor,
      ios,
      android,
      windows,
      description,
      extras} = product;
         const [main,...defaultImg]= images;
        // console.log(product);    
           let os;
                if(ios)
                  os = "ios" 
                if(android)
                os = "android" 
                if(windows)
                    os = "windows" 
        return (
            <>
           < StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title= {`${name}`}>
                    <Link to = "/"
                    className= "btn-primary">
                        back to Home
                    </Link>
                </Banner>
            </StyledHero>
            <section className= "single-room">
            {/* <div className="single-room-images">
                {defaultImg.map((item, index) => {                   
                     return <img key= {index} src={item} alt= {name}/>
                 } ) }
            </div> */}
            <div className= "single-room-info">
             <article className= "desc">
                 <h3> Review</h3>
                 <p> {description} </p>   
            </article>
            <article className= "info">
                <h2> Info</h2>
                <h6>Price: Rs. {price}</h6> 
                <h2> Specifications</h2>
                <h3> Processor </h3>
                <h6> {processor} </h6>
                <h3> Size</h3>
                <h6> {size} inches</h6>
             <h3> Operating System</h3>
                 <h6>{os}</h6>
            </article>
            </div>
            </section>
             <section className="room-extras">
                <h6>In a Nutshell </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
          <Comments currentUserId="1"/>
        </section>
        
        </>
        );
 
    }
}