# React Weather App

A simple weather application that retrieves real-time weather information based on a city or ZIP code. This project was created to enhance my understanding of the React JavaScript library and the Tailwind CSS framework


[Live Demo!](https://jbrasay-react-weather-app.netlify.app/)

## Features

- **Location-based Weather**: Input a city name, country, or ZIP code to get the weather information.
- **Geocoding Integration**: Utilizes the [Geoapify Geocoding API](https://www.geoapify.com/) to convert user input into latitude and longitude coordinates.
- **Weather Data Retrieval**: Fetches current weather information using the [Weatherbit API](https://www.weatherbit.io/).

## Technologies

- **Frontend**: React.js for building a dynamic, component-based user interface.
- **Styling**: Tailwind CSS for fast and efficient styling.
- **APIs**: Geoapify API and Weatherbit API for geolocation and weather data.
- **Data Fetching**: AXIOS for making API requests.
- **Animations**: Framer Motion for adding animations.
- **Icons**: Meteocons for animated weather icons.

Also uses AXIOS for fetching api, Framer motion for simple animation and [Meteocons!](https://bas.dev/work/meteocons) for animated weather icons.

## Project Setup
1. Clone the repository:
```bash
git clone https://github.com/jbrasay/react-weather-app.git
```
2. Navigate to the project directory:
```bash
cd react-weather-app
```
3. Install dependencies:
```bash
npm install
```
4. Set up your environment variables: Create a .env file in the root directory and add your API keys from Geoapify and Weatherbit:
```
VITE_GEOAPI_API_KEY=your_geoapify_api_key
VITE_WEATHER_API_KEY=your_weatherbit_api_key
```

## Starting Project
1. Start the development server:
```bash
npm run dev
```

