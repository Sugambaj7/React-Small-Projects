import React, { useEffect, useState, useRef } from "react";
import "./css/Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import wind_icon from "../assets/wind.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import humidity_icon from "../assets/humidity.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [error, setError] = useState(false);
  const [cityError, setCityError] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };
  const search = async (city) => {
    if (city === "") {
      setCityError("Please enter a city");
      return;
    } else {
      setCityError(false);
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`;

      const response = await fetch(url);
      const weatherData = await response.json();

      if (!response.ok) {
        setError(weatherData.message);
      }
      console.log(weatherData);
      const icon = allIcons[weatherData.weather[0].icon] || clear_icon;
      // console.log(icon, "k xa");
      setWeatherData({
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
        temperature: Math.floor(weatherData.main.temp),
        location: weatherData.name,
        weatherIcon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Kathmandu");
  }, []);

  return (
    <div className="weather">
      <div className="cityError">
        {cityError ? (
          <>
            <p>{cityError}</p>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" ref={inputRef} />
        <img
          src={search_icon}
          alt=""
          srcset=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {error ? (
        <>
          <div className="error">
            <p>{error}</p>
          </div>
        </>
      ) : (
        <>
          <img
            src={weatherData?.weatherIcon}
            alt=""
            srcset=""
            className="weather-icon"
          />
          <p className="temperature">{weatherData?.temperature} °c </p>
          <p className="location">{weatherData?.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" srcset="" />
              <div>
                <p>{weatherData?.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" srcset="" />
              <div>
                <p>{weatherData?.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
