import React, { useState } from 'react'
import SearchBox from "./SearchBox.jsx"
import InfoBox from './InfoBox'

export default function WeatherApp() {

  const [weatherinfo, setWeatherinfo] = useState({
    city: "",
    feelslike: "",
    temp: "",
    tempMin: "",
    tempMax: "",
    weather: "",
    humidity: ""
  })

  let updateInfo = (result)=>{
    setWeatherinfo(result)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox  updateInfo = {updateInfo }/>
      <InfoBox info={weatherinfo} />

    </div>
  )
}
