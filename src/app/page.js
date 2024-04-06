'use client';
import { useEffect, useState } from "react";
import CardGroup from "../../components/CardGroup";
import Hero from "../../components/Hero";

export default function Home() {
  
  const [currentPosition,setCurrentPosition] = useState({lat:'31.49559225398027',lng:'74.24357450498383'})
  const setPositions = (lat,lng)=>{
    setCurrentPosition({lat,lng});
    
  }
  useEffect(()=>{
    localStorage.setItem('positions',`${currentPosition.lat},${currentPosition.lng}`)
  },[currentPosition])
  return (
    <main className="min-h-screen">
      <Hero setPositions={setPositions}/>
      <h2 className="xl:text-6x+ lg:text-4xl md:text-4xl sm:text-4xl text-lg text-white uppercase lg:pl-32 pl-12 md:pl-16 sm:pl-10">Coffee stores</h2>
      <CardGroup lat={currentPosition.lat} lng={currentPosition.lng} />
    </main>
  );
}
