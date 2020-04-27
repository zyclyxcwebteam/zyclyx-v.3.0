import React from "react"
import { Link } from 'gatsby'
import Navbar from "../components/navbar"
import Industry from "../components/industry"
import Sectiontitle from "../components/sectiontitle"
import Statcount from "../components/statcount"
import '../styles/Industry.css'
// import ServiceDropdown from "../components/serviceDropdown"
// import Nav from "../components/nav"


export default () => {
    return(
        <>
        <Navbar /> 

        <div className="cotainer-fluid bg-blue-900" id="stats">
            
            <Sectiontitle  title="STATISTICS" text="lorem ipusum it is a professional dummy text"/>
            <div className="w-2/3 mx-auto pb-12 flex">
                <Statcount />
                <Statcount />
                <Statcount />
            </div>
        </div>

        <div className="container-fluid ">
           
           
            <Sectiontitle title="INDUSTRIES" text="lorem ipusum it is a professional dummy text"/>
            <div id="industries" className="flex pt-5">
            <Industry number="01" title="Bancking" text="lorem ipusum it is a professional dummy text"/>
            <Industry number="02" title="Telecom" text="lorem ipusum it is a professional dummy text"/>
            <Industry number="03" title="Healthcare" text="lorem ipusum it is a professional dummy text"/>
            <Industry number="04" title="Logistics" text="lorem ipusum it is a professional dummy text"/>
            <Industry number="05" title="Retail" text="lorem ipusum it is a professional dummy text"/>
            </div>
        </div>


        <div className="container-fluid pb-12">
            <div className="flex justify-center items-center">
            <Sectiontitle title="PROOF OF CONCEPT" text="With Proof of Concept, we offer you value added service in terms of advanced prototype creation which help in demonstrating our work potential. It also assists you to checkout its feasibility in your business process, hence optimizing the experience."/>
                <div className="w-6/12 md:3/4">
                <Link to = "" className="mt-8 ml-8 bg-green-300 p-4 font-semibold rounded-full">Get Started</Link>
                </div>
            </div>


            <div className="lg:w-3/4 flex mx-auto justify-between">
                <div className="proof-1 md:px-2 relative mt-8 bg-gray-100 inline-block w-64 text-center p-5">
                    <h1 className="text-lg pb-2 font-semibo?ld">Forecast</h1>
                    <p className="md:text-sm">Act as a tool to forecast the feasibility of the projects.</p>
                </div>
                <div className="proof-1 relative mt-8 bg-gray-100 inline-block w-64 text-center p-5">
                    <h1 className="text-lg pb-2 font-semibold">Report</h1>
                    <p>Act as a tool to forecast the feasibility of the projects.</p>
                </div>
                <div className="proof-1 relative mt-8 bg-gray-100 inline-block w-64 text-center p-5">
                    <h1 className="text-lg pb-2 font-semibold">Forecast</h1>
                    <p>Act as a tool to forecast the feasibility of the projects.</p>
                </div>
            </div>
        </div>
            
        </>
    )
}
