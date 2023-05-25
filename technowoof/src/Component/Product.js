import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from "../images/product-4.jpg";
import PropTypes from 'prop-types';
import { RoomContext } from '../context';
import { useContext } from 'react/cjs/react.development';

export default function Product({product}) {
  //  console.log(product);
   const context=useContext(RoomContext);
   const{name,slug,images,price} = product;   
   const{handleClick}=context;
  
    //        console.log(slug);
   return (
    <article className="room">
            <div className="img-container">        
                <img src={images[0] || defaultImg } alt={name}/>
                <div className="price-top">
                    <h6> Rs.{price} </h6>
                    
            </div>
            <Link to = {`/review/${slug}`} className= "btn-primary room-link" 
            onClick={() => 
              handleClick(slug)}
              >
                Review  
            </Link>
            </div>
            <p className= "room-info">{name} </p>
            </article>
);

}

Product.propTypes = {
    product : PropTypes.shape({ 
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })

}
