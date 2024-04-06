'use client';
import Image from "next/image"
import { useState } from "react";

function Hero({setPositions}) {
  
  const getNearlocation = async()=>{
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(positionFetch);
      
    } else { 
       console.log("Geolocation is not supported by this browser.");
    }
  }
  const positionFetch = (position)=>
  {
    console.log('position',position)
    setPositions(position.coords.latitude,position.coords.longitude)
  }
  return (
    <div className="lg:px-32 md:p-16 sm:p-12  p-12 flex justify-between">
   <div className="w-1/2 xl:mt:16 lg:mt-8 md:mt-0 mt-0 sm:mt-0">
   <h1 className="xl:text-6xl lg:text-4xl md:text-4xl sm:text-4xl text-lg text-white uppercase  ">Discover nearest coffee shop</h1>
   <button className="uppercase text-sm bg-purple-700 text-white lg:px-12 lg:py-4 md:px-8 md:py-3 sm:px-6 sm:py-2 py-2 px-6 hover:bg-purple-900 rounded lg:mt-14 md:mt-6 sm:mt-6  mt-5" onClick={getNearlocation}>Get Coffee stores </button>
   </div>
   <Image src='/static/coffee.png' height={200} width={300} className="w-1/4 h-1/2" />
   </div>
  )
}

export default Hero