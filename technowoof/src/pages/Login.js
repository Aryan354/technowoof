 import React, {useState} from "react"
 import { useNavigate } from 'react-router';
 // import "./login.css"
// // import axios from "axios"
// // import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Login = () => {
    const [ user, setUser] = useState({
         email:"",
         password:"",
     })
const handleChange = e => {
      const { name, value } = e.target
         setUser({
                 ...user,
           [name]: value
         })
     }  
     
    return (
         <div className="login">
             <h1 className= "reg">Login</h1>
             <input type="text" name="email" value= {user.email} placeholder="Enter your Email" onChange= {handleChange} ></input>
             <input type="password" name="password"   value = {user.password} placeholder="Enter your Password" onChange = {handleChange} ></input>
             <div className="btn-primary button " >
                  <Link to = "/" > Log In </Link>   
                 </div>
             <h6 className = "reg">Not a part of the TechnoWoof community? Click Below to Sign-Up</h6>
             <button className="btn-primary button  ">
                <Link to = "/registration" >Sign-Up </Link>    
             </button>
         </div>
    )
} 

 export default Login
