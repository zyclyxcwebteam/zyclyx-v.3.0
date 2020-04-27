import React from "react"
import newAgeImg from '../images/new-age.jpg' 
import { Link }from 'gatsby'
import Layout from '../components/layout'
import Industry from "../components/industry"
import Sectiontitle from "../components/sectiontitle"
import Statcount from "../components/statcount"
import { Container } from 'reactstrap'



export default () => {
    return(
        <>
     <Layout>
            <section className="">
                {/* service navigation */}
                <nav className="bg-gray-200">
                    <ul className="flex justify-between py-4 px-5 text-xl">
                    <li>New Age Technologies</li>
                    <li>Security Services</li>
                    <li>Application Development</li>
                    <li>Infrastructure Services</li>
                    <li>BI Solutions</li>
                    <li>Outsourcing Services</li>
                    </ul>
                </nav>
                {/* service inner */}
                <div className="flex h-full">
                    {/* image */}
                    <div className="bg-blue-200 flex-grow h-100 w-3/4">
                        <img src={newAgeImg} className="max-h-screen"/>
                    </div>
                    {/* service categories */}

                    <div className="bg-green-200 w-3/12">
                    <ul className="text-xl">
                    <li>New Age Technologies</li>
                    <li>Security Services</li>
                    <li>Application Development</li>
                    <li>Infrastructure Services</li>
                    <li>BI Solutions</li>
                    <li>Outsourcing Services</li>
                    </ul>
                    </div>
                </div>

            </section>
 
    
        <Container fluid="sm" id="stats">
            
            <Sectiontitle  title="STATISTICS" text="lorem ipusum it is a professional dummy text" color="green"/>
            <div className="">
                <Statcount />
                <Statcount />
                <Statcount />
            </div>
            </Container>

        <Container fluid="sm">
           
           
            <Sectiontitle title="INDUSTRIES" text="lorem ipusum it is a professional dummy text"/>
            <div id="industries" className="">
            <Industry number="01" title="Bancking" text="lorem ipusum it is a professional dummy text"/>
            <Industry number="02" title="Telecom" text="lorem ipusum it is a professional dummy text"/>
            <Industry number="03" title="Healthcare" text="lorem ipusum it is a professional dummy text"/>
            <Industry number="04" title="Logistics" text="lorem ipusum it is a professional dummy text"/>
            <Industry number="05" title="Retail" text="lorem ipusum it is a professional dummy text"/>
            </div>
        </Container>


        <div className="">
            <div className="flex justify-center items-center">
            <Sectiontitle title="PROOF OF CONCEPT" text="With Proof of Concept, we offer you value added service in terms of advanced prototype creation which help in demonstrating our work potential. It also assists you to checkout its feasibility in your business process, hence optimizing the experience."/>
                <div className="">
                <Link to = "" className="">Get Started</Link>
                </div>
            </div>


            <div className="">
                <div className="proof-1">
                    <h1 className="text-lg pb-2 font-semibo?ld">Forecast</h1>
                    <p className="md:text-sm">Act as a tool to forecast the feasibility of the projects.</p>
                </div>
                <div className="proof-1">
                    <h1 className="text-lg pb-2 font-semibold">Report</h1>
                    <p>Act as a tool to forecast the feasibility of the projects.</p>
                </div>
                <div className="proof-1 ">
                    <h1 className="text-lg pb-2 font-semibold">Forecast</h1>
                    <p>Act as a tool to forecast the feasibility of the projects.</p>
                </div>
            </div>
        </div>
        
        </Layout>        
        </>
    )
}
