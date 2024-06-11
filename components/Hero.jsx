"use client"

import react from 'react';

import { useState } from 'react';
import { FcSearch } from "react-icons/fc";
function Hero(){


    const [options, setOptions] = useState([
        { value: 'Instagram', label: 'Instagram' },
        { value: 'Facebook', label: 'Facebook' },
        { value: 'Reddit', label: 'Reddit' },
    ]);

    // State for selected option
    const [selectedOption, setSelectedOption] = useState(null);

    // Handler for select change
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Placeholder for search bar
    let searchBarPlaceholder = "Search...";
    if (selectedOption) {
        searchBarPlaceholder = `Enter keywords for ${selectedOption}`;
    }





















    return (
        <>
        <div className="text-center justify-center mt-10 font-bold font-serif text-slate-600" style={{backgroundColor : '#EEF7FF'}}>
            <p className="text-5xl">Social Media Monitoring</p>
            <p className='mt-6'>This is a random placeholder text for testing</p>
        </div>
    
        <div className="flex flex-col items-center justify-center md:flex-row space-x-4 mt-20 mb-20 p-3" style={{backgroundColor: '#224a6e'}}>
            {/* Dropdown */}
            <div className="relative mb-4 md:mb-0">
                <select 
                    className="block appearance-none w-32 bg-white border text-slate-600 border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleSelectChange}
                >
                    <option value="">Select</option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L4 6h12z"/></svg>
                </div>
            </div>
    
            {/* Search Bar */}  
            <input 
                type="text" 
                className="shadow appearance-none border rounded w-64 py-2 px-3 bg-white text-slate-900 leading-tight focus:outline-none focus:shadow-outline mb-4 md:mb-0" 
                placeholder={searchBarPlaceholder}
            />
    
            {/* Search Button */}
            <button className="bg-slate-400 hover:bg-blue-700 w-10 text-white font-bold py-0 px-0 rounded focus:outline-none focus:shadow-outline">
                <FcSearch className='w-10 h-10'/>
            </button>
        </div>
    </>
    );
}

export default Hero;