import React from 'react'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


const layout = (props) =>{  
    return(
   <>
    <Navbar />
    {props.children}
    </>
    )
}

export default layout;