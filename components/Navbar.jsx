"use client"
import react from 'react'
import logo from '../public/logo.jpg'
import Image from 'next/image';
import { FaHome } from "react-icons/fa";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-xl" style={{ backgroundColor: "#4D869C", display: 'flex', alignItems: 'center' }}>
    <div className="flex-none ml-5">
        <div className="dropdown dropdown-end p-3">
            <div className="w-16 rounded-full overflow-hidden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    alt="this is the profile pic"
                    src={logo}
                    width={96} 
                    height={96}
                />
            </div>
        </div>
    </div>
    <div className="flex-1"></div>
    <div className='flex-none'>
        <a className="btn btn-ghost text-xl text-white mr-3">  <FaHome /> Home</a>
    </div>
</div>
    );
}

export default Navbar;