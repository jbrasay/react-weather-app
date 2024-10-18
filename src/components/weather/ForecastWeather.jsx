//Import react hooks
import { useContext } from "react"
//Import framer motion
import { motion } from "framer-motion";
//Import moment 
import moment from "moment";
import "moment-timezone"
//Import context
import WeatherContext from "../../context/WeatherContext"
//Import utility
import { getImageURL } from "../../util/getImageURL";


export default function ForecastWeather() {
    const {weather} = useContext(WeatherContext);

    //Loop through each data and add jsx
    const dailyForecast = weather.weatherData.map((data, index) => {
            return (
                <motion.div
                    initial={{opacity:0, y: "25px"}}
                    animate={{opacity: 1, y: "0px"}}
                    transition={{duration: 3}} 
                    key={data.valid_date} 
                    className="flex flex-col w-40 h-48 m-3 py-8 items-center text-white bg-opacity-20 bg-green-900 shadow-xl">
                    <h1 className="font-medium text-sm text-center">{moment().format("YYYY-MM-DD") == data.valid_date? "Today" : moment(data.valid_date).format('MMM DD (ddd)')}</h1>
                    <img src={getImageURL(data.weather.code, data.weather.icon)} alt="weather-icon" className="size-16 m-auto" />
                    <div className="flex xl:flex-row xs:flex-col xs:items-center xs:text-xs text-sm xl:space-x-4 ">
                        <h1>H: {data.high_temp}°F</h1>
                        <h1>L: {data.low_temp} °F </h1>
                    </div>

                </motion.div>  
            )
    })

    return (
        <div className="flex flex-col w-full items-center pt-10 text-white">
            <div className="flex flex-row xs:w-72 sm:w-96 items-center">
                    <div className="flex-1 border-b-[1px] border-white"></div>
                    <h1 className="px-4">7 Day Forecast</h1>
                    <div className="flex-1 border-b-[1px] border-white"></div>
            </div>
            {/*Display 7 Day Forecast */}
            <div className="flex flex-col w-full xs:items-start xl:items-center xs:overflow-x-scroll xl:overflow-hidden no-scrollbar">
                <div className="flex flex-row">
                    {dailyForecast}
                </div>
            </div>
        </div>
    )
}