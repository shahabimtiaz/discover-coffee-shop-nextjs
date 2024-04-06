
export function options(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3zGurh+gsjzCG+v9dbRcyZZdlGEatFBp2Qsnt18z8bRs='
    }
  };
      return options;
}
export function CoffeeUrl(query,latLng,limit){
    
return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLng}&limit=${limit}`
}
export default async function CoffeeStoreData(lat=28.42316284217322,lng=70.300271319) {
    
    
   const response = await fetch(CoffeeUrl('coffee',`${lat}%2C${lng}`,10), options())
      let CoffeeStoreData =  await response.json();

      return CoffeeStoreData;
      
}

 