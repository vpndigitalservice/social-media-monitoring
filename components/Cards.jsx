"use client"

import react from 'react'
import Image from 'next/image';
import cardimg from '../public/cardimg.jpg'

function Cards(){
    return (
        <div className='p-24' style={{ backgroundColor: "#EEF7FF", display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="card w-full md:w-72 bg-base-100 shadow-xl text-white" style={{ backgroundColor: '#224a6e' }}>
                <figure>
                    <Image
                        src={cardimg}
                        width={300}
                        height={100}
                        alt="Shoes"
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title hover:text-slate-500">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
    
                </div>
            </div>
    
            <div className="card w-full md:w-72 bg-base-100 shadow-xl text-white" style={{ backgroundColor: '#224a6e' }}>
                <figure>
                    <Image
                        src={cardimg}
                        width={300}
                        height={100}
                        alt="Shoes"
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title hover:text-slate-500">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
    
                </div>
            </div>



            <div className="card w-full md:w-72 bg-base-100 shadow-xl text-white" style={{ backgroundColor: '#224a6e' }}>
                <figure>
                    <Image
                        src={cardimg}
                        width={300}
                        height={100}
                        alt="Shoes"
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title hover:text-slate-500">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
    
                </div>
            </div>



            <div className="card w-full md:w-72 bg-base-100 shadow-xl text-white" style={{ backgroundColor: '#224a6e' }}>
                <figure>
                    <Image
                        src={cardimg}
                        width={300}
                        height={100}
                        alt="Shoes"
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title hover:text-slate-500">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
    
                </div>
            </div>










            {/* Repeat the above card HTML for other cards */}
        </div>
    </div>
    
    
    );
}


export default Cards;
