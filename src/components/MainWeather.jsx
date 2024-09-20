import CurrentWeather from "./CurrentWeather"
import ForecastWeather from "./ForecastWeather"

//Main Weather Component
//Initial display a message to user and ask for zipcode, city, or country
//Display weather data if input from user is valid, else display an invalid input message
export default function MainWeather({weatherdata, isValid}) {
    //console.log("Main Weather!")
    //console.log(weatherdata)
    if (isValid) {
        if (weatherdata.weatherarray.length == 0)
            {
                return (
                    <div className="mx-auto mt-4 text-white text-4xl font-medium">
                        <h1>Would you like to see the weather? Type Country, City, or Zipcode!</h1>
                    </div>
                )
            }
        else {
            //Display Current Weather and daily forecast
            return (
                <div className="h-3/5 mx-auto">
                    <CurrentWeather currentweather={weatherdata.weatherarray[0]} citystate={weatherdata.citystate} country={weatherdata.country}/>
                    <ForecastWeather dailyforecast={weatherdata.weatherarray} />
                </div>
            )
        }
    }
    else {
        return (
            <div className="mx-auto mt-4 text-white text-4xl font-medium">
                <h1>Please enter a valid zipcode, city, or country!</h1>
            </div>
        )
    }
 

    
}