import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeaherTemperature';


const WeatherData = () => (
     <div>
         <WeatherTemparature/>
         <WeatherExtraInfo humidity ={80} wind = {"10 m/s"} />
     </div>
);


export default WeatherData;