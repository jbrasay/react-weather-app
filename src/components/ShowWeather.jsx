import { useContext } from "react"
import CurrentWeather from "./weather/CurrentWeather";
import ForecastWeather from "./weather/ForecastWeather"
import WeatherContext from "../context/WeatherContext"

export default function ShowWeather() {
    const {weather} = useContext(WeatherContext);
    return (
        <>
            {weather.weatherData.length != 0 ? 
                (<div className="w-full h-fit flex flex-col items-center">
                    <CurrentWeather/>
                    <ForecastWeather/>
                </div>) : 
                (<div className="p-20 text-center text-white text-bold sm:text-4xl xs:text-lg">
                    <h1>Would you like to see the weather? Type a City or Zip Code!</h1>
                </div>)
            }
        </>
    )
}