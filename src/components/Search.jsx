import React, { useState } from "react";

export default function Search({setWeather, setisLoading, setisValid}) {
    //Store location entered by user
    const [location, setLocation] = useState("");
    const weatherapikey = import.meta.env.VITE_WEATHER_API_KEY;
    const geoapikey = import.meta.env.VITE_GEOAPI_API_KEY;

    //Handle user input
    const handleChangeLocation = function(event) {
        setLocation(event.target.value);
    };
    //Submit user input
    const submitLocation = function(event) {
        event.preventDefault();
        getWeather(location);
        //Reset search bar
        setLocation("");
    };
    //Get the location coordinates latitude and longitude via Geoapify api
    //Use the returned latitude and longitude from Geoapify to search for the weather information via Weatherbit api
    const getWeather = function(loc) {
        setisLoading(true);
        setisValid(true);
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${loc}&format=json&apiKey=${geoapikey}`)
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          const coordinates = data.results;
          //If the returned result object array is empty, throw an empty error
          //If the result type from the data returned by Geoapify does not equal to city, country, or postcode, throw an error
          //Catch error and set isLoading to false and isValid to false
          //If data received from geoapify is valid and not empty, fetch weather data via Weatherbit api using the lat and lon data received from geoapify
          if (coordinates.length === 0) {
            throw new Error("empty");
          }
          else if (coordinates[0].result_type == "city" || coordinates[0].result_type == "country" || coordinates[0].result_type == "postcode" || coordinates[0].result_type == "state" ) {
            const cLatitude = coordinates[0].lat;
            const cLongitude = coordinates[0].lon;
            const cCityState = coordinates[0].address_line1;
            const cCountry = coordinates[0].country_code.toUpperCase();
            //Fetch Weather info using Latitude and Longitude value received from previous fetch
            fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${cLatitude}&lon=${cLongitude}&key=${weatherapikey}&units=I&days=7`)
            .then(function(res) {
              return res.json();
        
            })
            .then(function(data) {
              const weatherdata = data;
              setWeather(prevWeather => {
                return ({
                  citystate: cCityState,
                  country: cCountry,
                  weatherarray: weatherdata.data
                })
              });
              //Stop the loading screen and show the weather screen
              setisLoading(false);
            })
          }
          //If search result is not city, postcode, or country, throw an error
          else {
            //console.log("Invalid Search")
            throw new Error("invalid search");
          }
        })
        .catch(function(error) {
          setisLoading(false);
          setisValid(false);
          console.log(error);
        })
    };
    
    return (
      <div className="flex flex-col">
        <form onSubmit={submitLocation} className="my-10">
          <div className="relative w-1/3 m-auto">
            <input 
                type="text" 
                className="w-full p-3 rounded-lg text-lg text-gray-900 ring-transparent focus:ring-blue-500 focus:ring-2 focus:outline-none"
                id="searchLocation" 
                name="searchLocation" 
                placeholder="Enter a location (zipcode, city, or country)"
                onChange={handleChangeLocation}
                value={location}
                required
            >
            </input>
            <button type="submit" className="absolute px-5 py-2.5 end-2 top-1.5 rounded-lg text-white text-sm font-medium bg-sky-700 hover:bg-sky-900">Search</button>
          </div>
        </form>
      </div>
    )
}