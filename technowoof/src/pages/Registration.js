import React, { useState } from "react"
import {Link} from 'react-router-dom';
 // import "./register.css"
// // import axios from "axios"
// // import { useNavigate } from "react-router-dom"

 const Register = () => {
const [ user, setUser] = useState({
         name: "",
         email:"",
         password:"",
         reEnterPassword: ""
     })
const handleChange = e => {
      const { name, value } = e.target
         setUser({
                 ...user,
           [name]: value
         })
     }
return (
    <>

      <div className="register">
             <h1 className= "reg">Registration </h1>
             <input type="text" name="name"  value= {user.name} placeholder="Your Name" onChange={ handleChange } />
             <input type="text" name="email"  value= {user.email} placeholder="Your Email" onChange={ handleChange }/>
             <input type="password" name="password"  value = {user.password} placeholder="Your Password" onChange={ handleChange }/> 
             <input type="password" name="reEnterPassword"  value = {user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange } />
             <div className="button btn-primary" >
                <Link to= "/"> Register </Link>
                 </div>
     </div>
     </>
)
 }
 export default Register;