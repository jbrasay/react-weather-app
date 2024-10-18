import React, {useReducer, useState} from 'react';

//Import Components
import LoadingScreen from './components/loader/LoadingScreen';
import Header from './components/Header'
import ShowWeather from './components/ShowWeather';

//Import Context
import WeatherContext from './context/WeatherContext';
import SearchContext from './context/SearchContext'
//Import Reducer
import weatherReducer from './reducer/weatherReducer';

export default function App() {

  //Store weather information retrieve via OpenWeather
  const [weather, weatherDispatch] = useReducer(weatherReducer, {
    country: "",
    city: "",
    timeZone: "",
    weatherData: []
  });

  const [isSearching, setIsSearching] = useState(false); //Check to see if user is searching, display searching message if true
  
  const [isValid, setisValid] = useState(true); //Check to see if user input is valid, display invalid search message if false

  return (
    <WeatherContext.Provider value={{weather, weatherDispatch}}>
      <SearchContext.Provider value={{setIsSearching}}>
        <div className="w-full h-full flex flex-col font-serif overflow-y-auto overflow-x-hidden bg-gradient-to-r from-violet-600 to-indigo-600">
          <Header />
          {isSearching ? <LoadingScreen/>: <ShowWeather />}
        </div>
      </SearchContext.Provider>
    </WeatherContext.Provider>
  )
}

