import React from 'react'
import Banner from "../Component/Banner";
import {Link} from "react-router-dom";
const Err = () => {
    return (
        <>
        <div className="errClass">
        <Banner title= "OOPS!! 404 Alert" subtitle= "Wandered too far, have you? That's all right, we got you. Just press this button below to return to the woof-zone" >
        <Link to = "/" className="btn-primary">
        
            Return to Home
        </Link>
        </Banner>
        </div>
        </>
    )
}

export default Err;



