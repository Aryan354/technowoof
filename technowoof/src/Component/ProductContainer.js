import React from 'react'
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'
import {RoomConsumer} from '../context'
import Loading from './Loading';

export default function ProductContainer ()
{
    return (
        <RoomConsumer>
            {
                (value) => {
         //         console.log(value);
                  const{loading,sortedProducts,products} = value;  
                if(loading){
                     return<Loading/>;
                }
           //      console.log(sortedProducts);
                  return (
                      <>
            <ProductFilter products={products}/>
            <ProductList products={sortedProducts}/>
                    </>
                    );
                }
            }
        </RoomConsumer>
    );
}

