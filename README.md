# React Weather App

A simple weather application that retrieves real-time weather information based on a city, country, or ZIP code. This project was created to enhance my understanding of the React JavaScript library and the Tailwind CSS framework


[Live Demo!](https://jbrasay-react-weather-app.netlify.app/)

## Features

- **Location-based Weather**: Input a city name, country, or ZIP code to get the weather information.
- **Geocoding Integration**: Utilizes the [Geoapify Geocoding API](https://www.geoapify.com/) to convert user input into latitude and longitude coordinates.
- **Weather Data Retrieval**: Fetches current weather information using the [Weatherbit API](https://www.weatherbit.io/).

## Technologies

- **Frontend**: Built with the React JavaScript library for a dynamic user experience.
- **Styling**: Styled using the Tailwind CSS framework.

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
npm install -D tailwindcss postcss autoprefixer
```
4. Set up your environment variables: Create a .env file in the root directory and add your API keys from Geoapify and Weatherbit:
```
VITE_GEOAPI_API_KEY=your_geoapify_api_key
VITE_WEATHERBIT_API_KEY=your_weatherbit_api_key
```

## Starting Project
1. Start the development server:
```bash
npm run dev
```

