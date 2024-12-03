import React, { useState } from 'react'
import axios from 'axios'
const Weather = () => {

    const [city , setCity ] = useState()
    const [weather ,setWether] = useState()
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

const fetchWeather = async () => {
    try  {
const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'34a47a4e303579036cb10c35325278ff'}`)    
setWether(response)
}
    catch(error) {
console.log("Error Fetching weather data",error);
    }
}

const clickButton = () =>{
    fetchWeather();
}

    return (
    <div className='weather-container'>

    {/* input */}

      <input type="text"
      placeholder='Enter your City Name'
      value={city} 
        onChange={handleCityChange}
      />
{/* button */}
<button
onClick={clickButton}
> Get Weather
</button>

{weather && (<>
    <div className='weather-Info'>
        <h3>{weather.data.name}</h3>
        <p>Temp is {weather.data.main.temp}</p>
        <p>{weather.data.weather[0].description}</p>
    </div>
</>)}
    </div>
  )
}

export default Weather
