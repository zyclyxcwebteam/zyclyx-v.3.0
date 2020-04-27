import React from 'react'
import '../styles/industry.css'

function industry(props) {
    return (
        <div className="industry text-center md:justify-center content-center p-2 lg:py-4 bg-gray-100 sm:flex sm:flex-row">
            <h1 className="md:text-5xl sm:text-4xl font-light">{props.number}</h1>
            <div>
            <h2 className="lg:text-2xl py-4 md:font-semibold md:text-2xl">{props.title}</h2>
            <p className="sm:text-xs md:text-sm">{props.text}</p>
            </div> 

        </div>
    )
}



export default industry;