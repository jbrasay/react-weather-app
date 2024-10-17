//Import framer motion
import { motion } from "framer-motion";
//import icons
import { useContext } from "react"
import { WiHumidity } from "react-icons/wi";

//Import context
import WeatherContext from "../../context/WeatherContext"

//Import utility
import { getImageURL } from "../../util/getImageURL";

//Import moment
import moment from "moment";
import "moment-timezone"

export default function CurrentWeather() {
    const {weather} = useContext(WeatherContext);
    //Store the current weather from index 0 of the weather data array
    const currentWeatherData = weather.weatherData[0];
    return (
        <div className="flex flex-row flex-wrap xl:w-1/2 md:w-full h-fit justify-center">
            {/*Left Column - Weather Display info */}
            <motion.div
                initial={{opacity:0, x: "-50px"}}
                animate={{opacity: 1, x: "0px"}}
                transition={{duration: 3}} 
                className="flex flex-col w-fit h-fit xl:mr-5 md:mr-5">
                {/*Displays Weather Detail Info (City, Country, Temp, description, icon, low and high temp ) */}
                <div className="flex flex-col w-80 h-40 leading-4 items-center justify-center mt-5 py-32 px-3 text-white bg-opacity-20 bg-green-900 shadow-xl">
                    <p className="text-lg">{weather.city}</p>
                    <p className="text-lg">{weather.country}</p>
                    <h1 className="text-2xl" >{currentWeatherData.temp} °F</h1>
                    <h1 className="text-sm leading-10">{currentWeatherData.weather.description}</h1>
                    <div className="flex flex-row pb-2 items-end space-x-4">       
                        <p>H: {currentWeatherData.high_temp} °F</p>
                        <img src={getImageURL(currentWeatherData.weather.code, currentWeatherData.weather.icon)} alt="weather-icon" className="m-auto size-24"  />
                        <p>L: {currentWeatherData.low_temp} °F</p>
                    </div>
                </div>
                {/*Displays the maximum and minimum temp info */}
                <div className="flex flex-row w-80 h-40 leading-8 items-center justify-center mt-5 py-20 text-white bg-opacity-20 bg-green-900 shadow-xl">
                    <div className="flex flex-row">
                        <img src={getImageURL("misc", "thermometer")} alt="weather-icon" className="size-28"  />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="border-b-[1px]">Maximum Temp: {currentWeatherData.max_temp} °F </h1>
                        <h1>Minimum Temp: {currentWeatherData.min_temp} °F</h1>
                    </div>

                </div>

            </motion.div>
            {/*End of Left Column */}
            {/*Right Column - Weather Display info */}
            <motion.div
                initial={{opacity:0, x: "50px"}}
                animate={{opacity: 1, x: "0px"}}
                transition={{duration: 3}} 
                className="flex flex-col w-fit h-fit xl:ml-5 md:ml-5">
                {/*Display the sunrise and sunset */}
                <div className="flex flex-row w-80 h-40 leading-8 items-center justify-center mt-5 py-20 text-white space-x-4 bg-opacity-20 bg-green-900 shadow-xl">
                    <div className="flex flex-col items-center leading-3">
                        <img src={getImageURL("misc", "sunrise")} alt="weather-icon" className="size-24"  />
                        <h1>Sunrise: {moment(currentWeatherData.sunrise_ts *1000).tz(weather.timeZone).format("hh:mm A")}</h1>
                    </div>
                    <div className="flex flex-col items-center leading-3">
                        <img src={getImageURL("misc", "sunset")} alt="weather-icon" className="size-24"  />
                        <h1>Sunset: {moment(currentWeatherData.sunset_ts *1000).tz(weather.timeZone).format("hh:mm A")}</h1>
                    </div>
                </div>
                {/* Displays the wind info*/}
                <div className="flex flex-col w-80 h-fit leading-8  mt-5 pl-2 text-white bg-opacity-20 bg-green-900 shadow-xl">
                    <div className="flex flex-row">
                        <img src={getImageURL("misc", "wind")} alt="weather-icon" className="size-9"  />
                        <h1>Wind</h1>
                    </div>

                    <div className="flex flex-row items-center">
                        {/*Wind and Gust info */}
                        <div className="flex flex-col flex-1 text-center">
                            <div className="flex flex-row items-center justify-center border-b-[1px]">
                                <h1 className="pr-4 text-2xl">{currentWeatherData.wind_spd}°</h1>
                                <div className="flex flex-col">
                                    <h1 className="text-sm font-light">MPH</h1>
                                    <h1 className="text-sm font-medium">Wind</h1>
                                </div>

                            </div>
                            <div className="flex flex-row items-center justify-center">
                                <h1 className="pr-4 text-2xl">{currentWeatherData.wind_gust_spd}°</h1>
                                <div className="flex flex-col">
                                    <h1 className="text-sm font-light">MPH</h1>
                                    <h1 className="text-sm font-medium">Gust</h1>
                                </div>
                            </div>
                        </div>
                        {/*Wind direction info */}
                        <div className="flex flex-row w-fit justify-center items-center pr-4">
                            <img src={getImageURL("misc", "compass")} alt="weather-icon" className="size-12"  />
                            <h1 className="text-3xl">{currentWeatherData.wind_dir}°</h1>
                        </div>

                    </div>
                </div>
                {/**Displays the humidity info */}
                <div className="flex flex-col w-80 h-32 leading-4 items-center justify-center mt-5 text-white bg-opacity-20 bg-green-900 shadow-xl">
                    <div className="flex flex-row leading-10 items-center">
                        <WiHumidity className="text-white text-2xl"/>
                        <h1> Humidity </h1>                   
                    </div>
                    <h1 className="text-2xl">{currentWeatherData.rh}%</h1>
                </div>
            </motion.div>
            {/*End of Right Column */}
        </div>
    )

}