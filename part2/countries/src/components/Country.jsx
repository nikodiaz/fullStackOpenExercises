import axios from "axios";
import React, {useState, useEffect} from "react";


function Country({name, capital, population, languages, flag}) {
    const api_key = process.env.REACT_APP_API_KEY;

    const [weather, setWeather] = useState();

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then(res => setWeather(res.data))
        },[capital,api_key])
        console.log(weather)
    return (
        <div>
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h3>Languages</h3>
            <ul>
                {languages.map(lang => (
                    <li key={lang}>{lang}</li>
                ))}
            </ul>
            <img src={flag} alt='Flag' width='300px'/>
            <div>
                <h2>Weather in {capital}</h2>
                <p><strong>temperature: {weather.current.temperature} ºC</strong></p>
                <img src={weather.current.weather_icons} alt='weather' />
                <p><strong>wind: {weather.current.wind_speed} mph, direction {weather.current.wind_dir}</strong></p>
            </div>
        </div>
    )
}

export default Country