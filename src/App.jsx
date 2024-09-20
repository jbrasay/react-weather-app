import React from 'react'
import { useEffect, useState } from 'react'
import Search from './components/Search'
import LoadingScreen from './components/LoadingScreen'
import MainWeather from './components/MainWeather'

export default function App() {


  //Store weather information retrieve via Weatherbit API
  const [weather, setWeather] = useState({
    citystate: "",
    country: "",
    weatherarray: []
  })
  const [isLoading, setisLoading] = useState(false) //Check to see if user is searching, display searching message if true
  const [isValid, setisValid] = useState(true) //Check to see if user input is valid, display invalid search message if false

  return (
   <div className="h-screen flex flex-col font-mono bg-gradient-to-br from-gray-500 to-zinc-900">
      <Search setWeather={setWeather} setisLoading={setisLoading} setisValid={setisValid}/>
      {isLoading ? <LoadingScreen /> : <MainWeather weatherdata={weather} isValid={isValid}/>}
   </div>
    
  )
}
