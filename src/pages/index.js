import React from "react"
import { Link } from 'gatsby'
import newAgeImg from '../images/new-age.jpg'


export default () => {
    return(
        <>
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
        </>
    )
}
