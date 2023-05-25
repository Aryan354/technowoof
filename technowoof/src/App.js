import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Laptop from "./pages/Laptop";
import Mobile from "./pages/Mobile";
import SingleProduct from "./pages/SingleProduct";
import Err from "./pages/Err";
import Review from "./pages/Review";
import Navbar from "./Component/Navbar";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import About from "./pages/About";
import Blog from "./pages/Blog";
import {
  Routes,
  Route, 
} from "react-router-dom";
function App() {
  return ( 
    <>
    <Navbar />
    <Routes> 
    <Route  exact path= "/" element  = {<Home/>} />
    <Route  exact path= "/review/" element = {<Review/>} />
    <Route  exact path= "/laptop/" element = {<Laptop/>} />
    <Route  exact path= "/registration/" element = {<Registration/>} />
    <Route  exact path= "/login/" element = {<Login/>} />
    <Route  exact path= "/mobile/" element = {<Mobile/>} />
    <Route  exact path= "/about/" element = {<About/>} />
    <Route exact path = "/blog/" element = {<Blog/>} />
    <Route  exact path= "/review/:slug" element = {<SingleProduct/>} />
    <Route element ={<Err />} />
    </Routes>
    
    </>
  );
  
}

export default App;
