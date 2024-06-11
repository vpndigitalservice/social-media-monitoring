"use client"
import react from 'react'
import logo from '../public/logo.jpg'
import Image from 'next/image';
import { FaHome } from "react-icons/fa";

function Navbar() {
    return (
        <div className="navbar bg-base-100" style={{ backgroundColor: "#CDE8E5" }}>
            <div className="flex-none">
            <div className="dropdown dropdown-end mt-3 ml-5">
              
                        <div className="w-16  rounded-full    overflow-hidden">
                            <Image
                                alt="this is the profile pic"
                                src={logo}
                                width={96} // Adjust width and height for desired size
                                height={96}

                            />
                        </div>
                  

                </div>
            </div>
            <div className="flex-1">

            </div>
            <div className='flex-none'>
              
                <a className="btn btn-ghost text-xl text-slate-600 mr-3">  <FaHome /> Home</a>
            </div>
        </div>
    );
}

export default Navbar;