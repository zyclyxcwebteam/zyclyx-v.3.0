import React from 'react'
import Jobcard from '../components/jobcard'

const careers = (props) =>{

    return(
    <>
    <h1>careers </h1> 
    <div className="container-fluid bg-gray-900 flex justify-center content-center py-10">
        <div className="text-center">
        <h4 className="sm:text-sm text-orange-400 md:text-base">All opened positions related to</h4>
        <h1 className="text-white sm:text-lg md:text-3xl uppercase">Machine Learning</h1>
        </div>
    </div>
    <Jobcard />    
    <Jobcard />    
    </>
    )
}

export default careers;