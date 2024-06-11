"use client"

import React from 'react';
import Select,{components} from 'react-select'

import { FaInstagram, FaFacebook, FaReddit } from 'react-icons/fa';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";


const CustomOption = (props) => {
    return (
        <div {...props.innerProps} className="flex items-center p-2 cursor-pointer">
            <div style={{ fontSize: '1.5rem' }}>{props.data.icon}</div>
            <span className="ml-2 text-slate-900" style={{ fontSize: '1.25rem' }}>{props.data.label}</span>
        </div>
    );
};

const CustomSingleValue = (props) => {
    return (
        <components.SingleValue {...props}>
            <div className="flex items-center">
                <div style={{ fontSize: '1.5rem' }}>{props.data.icon}</div>
                <span className="ml-2" style={{ fontSize: '1.25rem' }}>{props.data.label}</span>
            </div>
        </components.SingleValue>
    );
};



function Hero(){


    const [options] = useState([
        { value: 'Instagram', label: 'Instagram', icon: <FaInstagram className="text-pink-500" /> },
        { value: 'Facebook', label: 'Facebook', icon: <FaFacebook className="text-blue-700" /> },
        { value: 'Reddit', label: 'Reddit', icon: <FaReddit className="text-orange-500" /> },
    ]);

    // State for selected option
    const [selectedOption, setSelectedOption] = useState(null);

    // Handler for select change
    const handleSelectChange = (option) => {
        setSelectedOption(option);
    };

    // Placeholder for search bar
    let searchBarPlaceholder = "Search...";
    if (selectedOption) {
        searchBarPlaceholder = `Enter keywords for ${selectedOption.label}`;
    }

   



    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: 200,
            height: 55,
            border: '1px solid #cbd5e0',
            boxShadow: 'none',
            fontWeight: 'bold',
            '&:hover': {
                borderColor: '#a0aec0',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'black' : '#4a5568',
            backgroundColor: state.isSelected ? '#4a5568' : 'white',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#a0aec0',
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            color: '#4a5568',
            fontSize: '1.25rem',
            fontWeight: 'bold',
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '0.25rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }),
    };

    return (
        <>
            <div className="text-center justify-center mt-10 font-bold font-serif text-slate-600" style={{ backgroundColor: '#EEF7FF' }}>
                <p className="text-5xl ">Social Media Monitoring</p>
                <p className='mt-6'>This is a random placeholder text for testing</p>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row space-x-4 mt-20 mb-20 p-3" style={{ backgroundColor: '#cedbf2' }}>
                {/* Dropdown */}
                <div className="relative mb-4  md:mb-0">
                    <Select
                        options={options}
                        styles={customStyles}
                        onChange={handleSelectChange}
                        placeholder="Select"
                        components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
                    />
                </div>

                {/* Search Bar */}
                <input
                    type="text"
                    className=" appearance-none border rounded w-1/2 h-14 py-2 px-3 shadow-xl bg-white text-slate-900 leading-tight focus:outline-none focus:shadow-outline mb-4 md:mb-0"
                    placeholder={searchBarPlaceholder}
                />

                {/* Search Button */}
                <button className="w-16 text-white font-bold bg-slate-500 shadow-xl hover:bg-slate-700 p-3 rounded focus:outline-none focus:shadow-outline">
                    <FaSearch className='w-10 h-10' />
                </button>
            </div>
        </>
    );
}

export default Hero;