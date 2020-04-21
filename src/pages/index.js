import React from "react"
import { Link } from 'gatsby'
import Navbar from "../components/navbar"
import ServiceDropdown from "../components/serviceDropdown"


export default () => {
    return(
        <>
        <Navbar />
        <ServiceDropdown />
            <Link to ="/aboutus">aboutus</Link>
            <h1>This is index</h1>
        </>
    )
}
