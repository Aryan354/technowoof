import { string } from 'prop-types';
import React, { Component } from 'react';
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
      products: [],
      sortedProducts: [],
      featuredProducts: [],
      loading: true,
      singleProduct: [],
        type: "all",
         capacity: 1,
         price: 0,
          minPrice: 0,
         maxPrice: 0,
         minSize: 0,
         maxSize: 0,
        ios: false,
        android: false,
        windows: false,
        slug: "Apple-Iphone-11"
    };

    componentDidMount(){
        let products = this.formatData(items);
           //  console.log(products);
        let featuredProducts = products.filter(product => product.featured === true);
           let maxPrice = Math.max(...products.map(item => item.price));
         let maxSize = Math.max(...products.map(item => item.size));
     
        this.setState({
            products,
            featuredProducts,
            sortedProducts: products,
            singleProduct: products[0],
            loading: false,
            price:maxPrice,
            maxPrice,
            maxSize
        });
    }

    formatData(items) {
          let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let product = {...item.fields, images, id};
            return product;
        });
    //     console.log(tempItems);
        return tempItems;
       
    }

    handleClick = (abc)=>{
   //   console.log(abc);
      //   this.getProduct
         let {slug,products,singleProduct}=this.state;
     // console.log(slug);
       let tempProducts=[...products];
       let tempSp=[singleProduct];
    //   console.log(tempSp);
      // console.log(tempProducts);
      tempSp=tempProducts.find(product => product.slug===abc);
        //   console.log(tempSp);         
     this.setState({
      singleProduct: tempSp
    });
    }

    getProduct=()=>{
      let {slug,products,singleProduct}=this.state;
      //console.log(products);
    //  console.log("hello");
  //    console.log(slug);
       let tempProducts=[...products];
       //console.log(tempProducts);
      tempProducts=tempProducts.filter(product => product.slug===slug);
         //  console.log(tempProducts); 
      }

    handleChange = event =>{
            const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
   // console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
    }

    filterRooms = () =>{
     //   console.log("hello");
       let {
      products,
      type,
      price,
      minSize,
      maxSize,
      ios,
      android,
      windows
    } = this.state;

     let tempProducts = [...products];
     price = parseInt(price); 
  
     if (type !== "all") {
      tempProducts = tempProducts.filter(product => product.type === type);
    }
        console.log(tempProducts);
     tempProducts = tempProducts.filter(product => product.price <= price);
      
      tempProducts = tempProducts.filter(  product => product.size >= minSize && product.size <= maxSize);
    //filter by breakfast
    if (ios) {
     tempProducts = tempProducts.filter(product => product.ios === true);
    }
    if (android) {
     tempProducts = tempProducts.filter(product => product.android === true);
    }
    if (windows) {
     tempProducts = tempProducts.filter(product => product.windows === true);
    }
     this.setState({
      sortedProducts: tempProducts
    });
    };

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state,handleClick:this.handleClick,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withProductConsumer(Component)
{
    return function ConsumerWrapper(props)
    {
        return (
        <RoomConsumer> 
            {value => <Component {...props} context = {value}/>}
        </RoomConsumer>
         );
    };
}
export{RoomProvider, RoomConsumer, RoomContext};
