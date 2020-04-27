import React,{useState} from 'react'
import { Link } from 'gatsby'
import Logo from '../Images/Logo.png' 
import ServiceDropdown from '../components/serviceDropdown'


const Nav = () =>{         
    const [isExpanded, toggleExpansion] = useState(false)
            return (
              <nav className="flex items-center justify-between flex-wrap bg-gray-100 sm:p-3 md:p-0 md:px-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <img src={Logo} width="168px" />
                </div>
                <div className="block md:hidden">
                  <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-black border-gray-400 hover:text-orange-500 hover:border-orange-400">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>
                <div className={`${ isExpanded ? `block` : `hidden` } sm:mt-4 md:mt-0 w-full md:flex md:items-center md:w-auto justify-end`}>
                  <div className="text-sm md:flex-grow md:flex">
                    <Link to={`/`} href="#responsive-header" className="block rounded-md sm:py-2 sm:px-2 sm:mt-1 md:mt-0 md:p-4 lg:inline-block lg:mt-0 text-black hover:bg-gray-200 hover:text-orange-500">
                      Home
                    </Link>
                    <Link to={`/aboutus`} className="block rounded-md sm:py-2 sm:px-2 sm:mt-1 md:mt-0 md:p-4 lg:inline-block lg:mt-0 text-black hover:bg-gray-200 hover:text-orange-500">
                      About us
                    </Link>
                    <Link to ={`/services`} className="block rounded-md sm:py-2 sm:px-2 sm:mt-1 md:mt-0 md:p-4 lg:inline-block lg:mt-0 text-black hover:bg-gray-200 hover:text-orange-500">
                      {<ServiceDropdown />}
                    </Link>
                    <Link to={`/careers`} className="block rounded-md sm:py-2 sm:px-2 sm:mt-1 md:mt-0 md:p-4 lg:inline-block lg:mt-0 text-black hover:bg-gray-200 hover:text-orange-500">
                      Careers
                    </Link>
                    <Link to={`/contactus`} className="block rounded-md sm:py-2 sm:px-2 sm:mt-1 md:mt-0 md:p-4 lg:inline-block lg:mt-0 text-black hover:bg-gray-200 hover:text-orange-500">
                      Contact us
                      </Link>
                  </div>
                </div>
              </nav>
            )
          }
 

export default Nav;