import React from 'react' ;
import Product from './Product';

export default function ProductList({products}) {
   if(products.length === 0)
   {
        return (
            <div className= "empty-search">
                <h3> Unfortunately, No gadgets match to your specification </h3>
            </div>
        )
    }
    
         //       console.log(products)
    return   (
    <section className="roomslist">
            <div className= "roomslist-center">
                {
               products.map(item=> {
                       return <Product key={item.id} product={item} />;
                   })}
            </div>
        </section>
    );
}
