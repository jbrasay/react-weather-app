# React Weather App

A weather application that fetches real-time weather information based on a city name or ZIP code. This project showcases my skills with React and Tailwind CSS, integrating external APIs and animations to create a dynamic web application.


[Live Demo!](https://jbrasay-react-weather-app.netlify.app/)

<p align="middle">
    <img src="https://github.com/jbrasay/project-screenshots/blob/f1f56da0ffe772fb27c5fd6d828018636b844715/screenshots/weather-app/Weather-App-1.png" width="400" height="400">
    <img src="https://github.com/jbrasay/project-screenshots/blob/f1f56da0ffe772fb27c5fd6d828018636b844715/screenshots/weather-app/Weather-App-2.png" width="400" height="400">
</p>

## Features

- **Location-based Weather**: Input a city name, country, or ZIP code to get the weather information.
- **Geocoding Integration**: Utilizes the [Geoapify Geocoding API](https://www.geoapify.com/) to convert user input into latitude and longitude coordinates.
- **Weather Data Retrieval**: Fetches current weather information using the [Weatherbit API](https://www.weatherbit.io/).

## Technologies

- **Frontend**: Built with the React JavaScript library for a dynamic user experience.
- **Styling**: Styled using the Tailwind CSS framework for fast and efficient styling.
- **APIs**: [Geoapify Geocoding API](https://www.geoapify.com/) and [Weatherbit API](https://www.weatherbit.io/) for geolocation and weather data.
- **Data Fetching**: AXIOS for making API requests.
- **Animations**: Framer Motion for adding animations.
- **Icons**: [Meteocons](https://bas.dev/work/meteocons) for animated weather icons.

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

