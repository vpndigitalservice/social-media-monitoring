"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
export default function Sidebar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className=" md:w-1/6 h-screen text-slate-600 overflow-y-auto" style={{backgroundColor: "#CDE8E5"}}>
      {/* Toggle button for smaller screens */} 
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="fixed top-5 right-5 z-50 bg-gray-800 text-white p-2 rounded-lg"
        >
          {isSidebarOpen ? <IoClose /> : <GiHamburgerMenu />} 
        </button>
      </div>

  
      <div className={`md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <ul className="p-4">
          <li className="mb-2 " onClick={toggleSidebar}><a href="#item1" className="flex py-2 px-4 h-16 text-xl font-bold  items-center rounded-md hover:bg-blue-300">Sidebar Item 1</a></li>
          <li className="mb-2 " onClick={toggleSidebar}><a href="#item1" className="flex py-2 px-4 h-16 text-xl font-bold  items-center rounded-md hover:bg-blue-300">Sidebar Item 2</a></li>
          <li className="mb-2 " onClick={toggleSidebar}><a href="#item1" className="flex py-2 px-4 h-16 text-xl font-bold  items-center rounded-md hover:bg-blue-300">Sidebar Item 3</a></li>
          <li className="mb-2 " onClick={toggleSidebar}><a href="#item1" className="flex py-2 px-4 h-16 text-xl font-bold  items-center rounded-md hover:bg-blue-300">Sidebar Item 4</a></li>
          <li className="mb-2 " onClick={toggleSidebar}><a href="#item1" className="flex py-2 px-4 h-16 text-xl font-bold  items-center rounded-md hover:bg-blue-300">Sidebar Item 5</a></li>
          <li className="mb-2 " onClick={toggleSidebar}><a href="#item1" className="flex py-2 px-4 h-16 text-xl font-bold  items-center rounded-md hover:bg-blue-300">Sidebar Item 6</a></li>

         
         
         
        </ul>
      </div>
    </aside>
    );
}