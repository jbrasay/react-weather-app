import { useContext } from "react"

import { motion } from "framer-motion";
//Import motion
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
                    className="flex flex-col w-fit h-fit m-3 p-3 text-white bg-opacity-20 bg-green-900 shadow-xl">
                    <h1 className="font-medium text-sm text-center">{moment().format("YYYY-MM-DD") == data.valid_date? "Today" : moment(data.valid_date).format('MMM DD (ddd)')}</h1>
                    <img src={getImageURL(data.weather.code, data.weather.icon)} alt="weather-icon" className="size-16 m-auto" />
                    <div className="flex flex-row text-sm space-x-4 ">
                        <p>H: {data.high_temp}°F</p>
                        <p>L: {data.low_temp} °F </p>
                    </div>

                </motion.div>  
            )
    })

    return (
        <div className="flex flex-row flex-wrap xl:w-1/2 pt-10  h-fit justify-center">
            <div className="flex flex-col text-white">
                {/*7 Day Forecast Title */}
                <div className="flex flex-row md:px-28 justify-center ">
                    <div className="flex-1 border-b-[1px] border-white"></div>
                    <h1 className="px-4">7 Day Forecast</h1>
                    <div className="flex-1 border-b-[1px] border-white"></div>
                </div>
                {/*Display 7 Day Forecast */}
                <div className="flex flex-row xs:flex-wrap xl:flex-nowrap justify-center">
                    {dailyForecast}
                </div>
            </div>

        </div>
    )
}