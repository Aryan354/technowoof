import React, { Component } from 'react';
import { RoomContext } from '../context';
import Title from './Title';
import Loading from './Loading';
import Product from './Product';

export default class FeaturedProucts extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredProducts: products} = this.context;
  //   console.log(products);
        
     products = products.map(product => {
         return <Product key={product.id} product={product} />;
     });


     return(
         <section className="featured-rooms">
         <Title title="What's Hot?"/>
         <div className="featured-rooms-center">
             {loading ? <Loading/> : products}
      </div>
      </section>
     )}
}
 