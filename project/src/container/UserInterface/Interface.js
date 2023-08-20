import React from 'react'
import './interface.css';
import  {useEffect, useState} from "react";

const Interface = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch]= useState("")

    useEffect(()=>{
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2ea4035e16986b7fd95fff022632db46`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
           
        }
        fetchApi();
    },[search])

    
    
  return (
   
    <>
    <div className='mainBox'>
       <div className='Box'>
          <form className="d-flex">
           <input placeholder='Enter your City Name' onChange={(event) => setSearch(event.target.value)} type="search" />
           </form>
       </div>
       
       {!city ? (
        <p>No Data Found</p>
       ):(
        <div>
        <h1>{city.temp} °c</h1>
        <h5>clear</h5>
        <h5>min {city.temp_min} | max {city.temp_max}</h5>

        <hr/>

        <div className='lower'>
       <p className='line1'>Today's Forecast  for {search}</p>
       <p>Pressure {city.pressure}</p>
       <p>Humidity {city.humidity}</p>
      
        </div>
        </div>
       )}
        
       
       
       </div>
    </>
  )
}

export default Interface