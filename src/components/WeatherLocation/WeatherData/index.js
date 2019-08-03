import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeaherTemperature';
import './styles.css';

const WeatherData = ({ data: {temperature, weatherState, humidity,wind} }) => {
    return (<div className="weatherDataCont">
        <WeatherTemparature
            temperature ={temperature} 
            weatherState={weatherState}
        />
         <WeatherExtraInfo humidity ={humidity} wind = {wind}/>
     </div>);
};

WeatherData.prototypes = {
    data: PropTypes.shape({
        temeperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired, 
    }),
}

export default WeatherData;