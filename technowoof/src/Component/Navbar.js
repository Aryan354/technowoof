import React, { Component } from 'react'
import logo from '../images/logo.png'
import {FaAlignJustify, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaRedditSquare
} from "react-icons/fa";

import {Link} from 'react-router-dom';
export default class Navbar extends Component {
   state = 
   {
       isOpen: false 
   }
   handleToggle = () => {
       this.setState({isOpen: !this.state.isOpen})
   }
   
    render() {
        return (
            <nav className= "navbar">
            <div className= "nav-center">
            <div className= "nav-header">
            <Link to ="/">
                <img src= {logo} alt= "TechnoWoof" className= "myclass" />
            </Link>
             <button type= "button" className= "nav-btn" onClick= {this.handleToggle} > 
             <FaAlignJustify className= "nav-icon" > </FaAlignJustify>
             </button>
            </div> 
            <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                <li>
                    <Link to = "/"> Home</Link>
                </li>
                <li>
                    <Link to = "/about"> About Us</Link>
                </li>
                <li> 
                    <Link to = "/Review"> Reviews </Link>
                </li>
                <li> 
                    <Link to = "/Blog"> Blogs </Link>
                </li>
                
                <li>
                    <Link to = "/login" className= "right"> Log In</Link>
                </li>

                <li>
                     <Link to ="/"> <FaFacebookSquare className= "nav-icon" >  </FaFacebookSquare> </Link>
                </li>
                <li>
                      <Link to ="/"><FaInstagramSquare className= "nav-icon" >  </FaInstagramSquare> </Link> 
                </li>
                <li>
                      <Link to ="/"><FaTwitterSquare className= "nav-icon" > </FaTwitterSquare>  </Link> 
                </li>
                 <li>
                      <Link to ="/"><FaRedditSquare className= "nav-icon" >  </FaRedditSquare>  </Link>
                </li>
               
            </ul>
            </div>
            </nav>
        )
    }
}
