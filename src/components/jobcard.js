import React from 'react'
import { Link } from 'gatsby'
// import Nextarrow from '../icons/Nextarrow.svg'

function jobcard () {
    return(
    <>
        <div className="lg:max-w-5xl sm:mx-2 md:max-w-2xl sm:max-w-full sm:mx-4 md:mx-auto p-4 my-2 rounded-md bg-gray-200 hover:shadow-md">
            <div className=" md:flex md:justify-between">
            <h1 className=" text-3xl mb-2 sm:text-lg sm:font-semibold md:text-2xl">Machine Learning</h1>
            <p className="bg-white inline-block rounded-md text-xs p-2 px-4 mb-2 align-middle">Posted on: <span className="font-semibold text-green-500">09/08/2020</span></p>
            </div>
            <p className="max-w-4xl sm:text-sm md:text-base">ZYCLYX recruits, trains and assigns the best candidates in the field of IT to work on some of our biggest projects in the Middle East... (More Info)</p>
            <div className="mt-4 mb-2">
    <Link to="" className="bg-white rounded-full p-2 px-4 text-sm">Apply Now <span></span></Link>
            </div>
        </div>
    </>
    )
}

export default jobcard;