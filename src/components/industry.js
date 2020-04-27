import React from 'react'
import '../styles/industry.css'

function industry(props) {
    return (
        <div className="">
            <h1 className="">{props.number}</h1>
            <div>
            <h2 className="">{props.title}</h2>
            <p className="">{props.text}</p>
            </div> 

        </div>
    )
}



export default industry;