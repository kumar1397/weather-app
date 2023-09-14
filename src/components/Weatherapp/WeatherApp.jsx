import React from 'react';
import './WeatherApp.css';
import search_icon from '../images/search.png';
import clear_icon from '../images/clear.png';
import cloud_icon from '../images/cloud.png';
import drizzle_icon from '../images/drizzle.png';
import humidity_icon from '../images/humidity.png';
import rain_icon from '../images/rain.png';
import snow_icon from '../images/snow.png';
import wind_icon from '../images/wind.png';

const WeatherApp = () => {
  let api_key = "2f9063d606d1add1eb33c080965bcdfa";
  const search = () =>{
    const element = document.getElementsByClassName("cityinput");
    if (element[0].value === ""){
      return 0;
    }
    
  }
  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className='cityinput' placeholder='search'/>
          <div className="search-icon">
            <img src={search_icon} alt="search" />
          </div>
        </div>
        <div className="weather-image">
          <img src={cloud_icon} alt="cloud" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">18km/hr</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WeatherApp 