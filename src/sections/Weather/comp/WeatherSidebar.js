import React from 'react';
import ForecastViewMode from '../subcomp/ForecastViewMode';
import TimePeriod from '../subcomp/TimePeriod';
import TechBlock from '@sidebar/TechBlock';
import MountMap from '../subcomp/MountMap';

const WeatherSidebar = () => (
  <div className='sidebar'>
    <ForecastViewMode />
    <TimePeriod />
    <TechBlock list='React, Redux, Axios, Redux Thunk, React Portals, React Hooks, React Sparklines, OpenWeatherMap API, Google Maps API' />
    <MountMap />
  </div>
);

export default WeatherSidebar;
