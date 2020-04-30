import React from 'react'
import '../styles/industry.css'

function industry(props) {
    return (
        <div className="industry d-sm-flex text-md-center justify-content-center align-items-center bg-light">
            <div className="d-sm-flex flex-sm-column justify-content-center align-items-center industry-sm">
            <h1 className="display-4 py-md-4 pr-sm-4  p-md-0">{props.number}</h1>
            <div className=" industry-text text-md-center ml-sm-4 ml-xs-2 ml-md-0">
            <h2 className="">{props.title}</h2>
            <p className="m-0">{props.text}</p>
            </div>
            </div> 

        </div>
    )
}



export default industry;