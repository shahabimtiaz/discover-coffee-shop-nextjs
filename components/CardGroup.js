'use client';
import { useRouter } from "next/navigation";
import Image from "next/image"
import { useEffect, useState } from "react"
import CoffeeStoreData from "../lib/CoffeeStoreData"

function CardGroup({lat,lng}) {
  const [stores,setStores] = useState(null)
  const router = useRouter();
  async function getStores(){
    let storesFetched = await CoffeeStoreData(lat,lng)
    setStores(storesFetched.results);
    console.log(storesFetched.results);
  }
  
  useEffect(()=>{
    
    getStores()
    
  },[lat,lng])
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 px-32 my-5 h-full ">
 {
  stores?.length > 0 ?  stores?.map((item)=>{
    return <div className="justify-self-center gap-3 flex flex-col items-center p-3 border-2 p-3 h-54  hover:bg-indigo-500 cursor-pointer" key={item.fsq_id} onClick={()=>router.push(`/coffee-stores/${item.fsq_id}`)} ><p className="uppercase text-white text-2xl">{item.name}</p><Image src='/static/coffee-shop.jpg' height={150} width={200} className=" mt-1 "/></div>
  }) : <p className="text-2xl text-center"> No Data found!</p>
 }
 
</div>
  )
}

export default CardGroup