//Displays current weather, this is the first data from the weather api data array 
export default function CurrentWeather({currentweather, citystate, country, getImageURL}) {

    //Date format options
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' };

    return (
        <div className="flex flex-col m-4 p-4 h-3/5 text-white text-center text-lg bg-gradient-to-br from-violet-900 to-cyan-600 rounded-xl shadow-2xl">            
            <div className="flex flex-row justify-between px-10">
                <div className="flex flex-col my-4 w-1/2">
                    <h1 className="text-4xl font-semibold">{citystate}</h1>
                    <h1 className="text-4xl font-semibold">{country}</h1>
                    <h1 className="text-lg">{new Date(currentweather.valid_date).toLocaleDateString("en-us", options)}</h1>
                </div>
                <h1 className="m-4 text-6xl font-semibold">{currentweather.temp}°F</h1>
            </div>
            <div className="flex flex-col mt-4">
                <h1 className="text-5xl font-semibold">{currentweather.weather.description}</h1>
                <img src={getImageURL(currentweather.weather.code, currentweather.weather.icon)} alt="weather-icon" className="m-auto size-32"  />
            </div>
            <div className="text-sm">
                <h3><span>H:{currentweather.high_temp}°F</span> | <span>L:{currentweather.low_temp}°F</span></h3>
                <h3>Wind: {currentweather.wind_spd} mph</h3>
                <h3>Humidity: {currentweather.rh} %</h3>
            </div>
        </div>
    )
}
