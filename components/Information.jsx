"use client";
import react from "react";
import Image from "next/image";
import cardimg from '../public/cardimg.jpg'

function Information(){
    return (
        <>
        <div className="w-full h-auto flex flex-col items-center pt-4 justify-center text-slate-600" style={{ backgroundColor: '#EEF7FF' }}>
            <div className="flex justify-center p-5">
                <div className="max-w-xs md:max-w-sm rounded-lg overflow-hidden border border-gray-300">
                    <Image
                        className="w-full h-auto"
                        src={cardimg}
                        width={300}
                        height={300}
                        alt="info img"
                    />
                </div>
            </div>
    
            <div className="flex flex-1 p-5 font-bold items-center text-center">
                This is the text Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eligendi optio recusandae cumque a iure! consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi nihil adipisci voluptas hic deserunt eum recusandae libero. Quam, natus expedita. Earum, nobis eveniet. Dicta, ea aspernatur? Aliquid quia veritatis autem amet. Culpa soluta aspernatur autem accusamus explicabo laborum! Dolor sit amet consectetur adipisicing elit. Laudantium, architecto!
            </div>
    
        </div>
        <div className="w-full text-center text-xl text-slate-700 p-5 font-bold" style={{ backgroundColor: '#EEF7FF' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nam explicabo sunt dignissimos animi recusandae quod nulla ex nihil natus veritatis deleniti sequi eos laboriosam perferendis, nemo veniam in mollitia!</div>
    </>

    );
}

export default Information;