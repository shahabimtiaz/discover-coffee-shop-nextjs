'use client';
import { useEffect, useState } from "react";
import CoffeeStoreData from "../../../../lib/CoffeeStoreData"
import { useRouter } from "next/navigation";



export default  function CoffeeStores({params}) {
  const [data,setData] = useState({});
  const router = useRouter();
  async function getStores(){
    let getPositionsFirst = await localStorage.getItem('positions');
    let lat = getPositionsFirst.split(',')[0];
    let lng = getPositionsFirst.split(',')[1];
    let storesFetched = await CoffeeStoreData(lat,lng);
     
    let obj = storesFetched.results.find((item)=> item.fsq_id === params.id)
    setData(obj);
    console.log(obj);
  }
  useEffect(()=>{
    getStores();
  },[])
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
     <div className="h-96 w-screen border rounded p-4 text-2xl text-center flex justify-center items-center flex-col">
     <h1 className="bg-white  p-3 rounded mb-2">Coffee store name</h1>
     <p>{data?.name}</p>
      <p className="bg-white p-3 rounded mb-2">Coffee store address</p>
      <p>{data?.location?.formatted_address}</p>
      <button className="bg-purple-500 rounded hover:bg-purple-700 p-4 text-white mt-5" onClick={()=>router.push('/')}>Go back</button>
     </div> 
    </div>
  )
}
