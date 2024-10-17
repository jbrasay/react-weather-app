export default function weatherReducer(weather, action) {
    switch(action.type) {
        case "SET_WEATHER": {
            return (
                {
                    country: action.country,
                    city: action.city,
                    timeZone: action.timeZone,
                    weatherData: action.weatherData
                }
            )
        }
    }
}