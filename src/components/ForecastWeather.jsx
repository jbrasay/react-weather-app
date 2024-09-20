//Display the 7 day weather data from the weather api returned data array
export default function ForecastWeather({dailyforecast, getImageURL}) {
    //console.log("Forecast Weather")
    //console.log(dailyforecast)
    const daily = dailyforecast.map(function(data, index) {
        //First data is the current weather, displays today or tomorrow depending on the search location and local timezone
        if (index == 0) {
            return (
                <div key={data.valid_date} className="m-3 p-3">
                <h2 className="font-medium text-sm">{new Date().toLocaleDateString("en-ca") == data.valid_date ? "Today" : "Tomorrow"}</h2>
                <img src={getImageURL(data.weather.code, data.weather.icon)} alt="weather-icon" className="size-16 m-auto" />
                <p className="text-sm">H:{data.high_temp} L:{data.low_temp} </p>
                </div>  
            )           
        }
        else {
            return (
                <div key={data.valid_date} className="m-3 p-3">
                <h2 className="font-medium text-sm">{new Date(data.valid_date).toLocaleDateString("en-us", {weekday: 'long', timeZone: 'UTC' })}</h2>
                <img src={getImageURL(data.weather.code, data.weather.icon)} alt="weather-icon" className="size-16 m-auto" />
                <p className="text-sm">H:{data.high_temp} L:{data.low_temp} </p>
                </div>  
            )
        }
    })

    return (
        <div className="flex flex-col m-4 text-white bg-gradient-to-br from-violet-900 to-cyan-600 rounded-xl shadow-2xl "> 
            <div className="m-3 p-3 text-center text-lg font-medium">
                <h1>Daily Forecast</h1>
            </div> 
            <div className="flex flex-row text-center">
                {daily}
            </div>

        </div>
    )
}

