import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import './styles.css';
import {
    SUN, 
} from './../../constants/weathers';

const data = {
    temperature: 10,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s',
}
const WeatherLocation = () => (
    <div>
        <Location city ={"Madrid"}></Location>
        <WeatherData data = {data}></WeatherData>
    </div>
);

export default WeatherLocation;