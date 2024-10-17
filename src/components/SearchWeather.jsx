import { useContext, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import WeatherContext from "../context/WeatherContext";
import SearchContext from "../context/SearchContext";

export default function Search() {
    const [location, setLocation] = useState("");
    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const GeoApiKey = import.meta.env.VITE_GEOAPI_API_KEY;
    const {weatherDispatch} = useContext(WeatherContext);
    const {setIsSearching} = useContext(SearchContext);

    /**
     * Get the weather information
     * Fetch location from the geoapify api and get the latitude and longitude on index 0 from the returned data array
     * Fetch the weather info from the Weatherbit api using the latitude and longitued received from geoapify
     */
    const getWeather = async () => {
        try {
            //Fetch the latitude and longitude using the geoapify api
            setIsSearching(true);
            const responseGeo = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${location}&format=json&apiKey=${GeoApiKey}`)
            const {results} = responseGeo.data;
            //console.log("Response Results: ", results);
            if (results.length === 0) {
                //console.log("empty");
                throw "No resulsts found!";
            }
            //Get the location info from the geoapify response
            const latitudeInfo = results[0].lat;
            const longitudeInfo = results[0].lon;
            const cityStateInfo = results[0].address_line1;
            const countryInfo = results[0].country_code.toUpperCase();
            
            //Fetch the data weather info using the Weatherbit API
            const responseWeather = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitudeInfo}&lon=${longitudeInfo}&key=${weatherApiKey}&units=I&days=7`)
            const dataWeather = responseWeather.data;
            //console.log("Weather Response: ", dataWeather);
            //conosole.log("TimeZone: " , responseWeather.timezone);
            weatherDispatch({type: "SET_WEATHER", country: countryInfo, city: cityStateInfo, timeZone: dataWeather.timezone, weatherData: dataWeather.data})
            setIsSearching(false);
        } catch(error) {
            setIsSearching(false);
            console.log("Error: ", error);
        }
    }
    //console.log("Weather Reducer: ", weather );

    //Submit the location entered by the user to fetch the weather info
    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather();
    }

    return (
        <motion.div 
            initial={{opacity:0, x: "-50px"}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}} 
            className="sm:w-1/3 xs:w-[350px] p-4 text-white" >
            <form className="flex flex-row border-2 items-center border-white rounded-lg" onSubmit={handleSubmit}>
                <label htmlFor="weatherSearch"><IoIosSearch className="text-xl ml-2 " /></label>
                <input 
                    type="text"    
                    className="input input-ghost flex-1 p-2 bg-transparent text-lg xs:text-sm text-white placeholder-white focus:border-none focus:outline-none" 
                    placeholder="Please enter a city or zip code"
                    value={location}
                    onChange={(e)=>{setLocation(e.target.value)}}
                    autoComplete="off"
                    id="weatherSearch">                
                </input>
                <button type="submit" className=" mr-4 p-1 rounded-sm bg-white text-black text-sm font-thin ">Search</button>
            </form>
        </motion.div>
    )
}