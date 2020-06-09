import React from 'react';
import MountMap from './MountMap';
import ForecastViewMode from './ForecastViewMode';
import SidebarInfo from '../../../app/SidebarInfo/comp/SidebarInfo';

const WeatherSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <ForecastViewMode />
      <SidebarInfo list='React, Redux, Axios, React Hooks, Redux Thunk, React Portals, React Sparklines, OpenWeatherMap API, Google Maps API' />
      <MountMap />
    </div>
  </div>
);

export default WeatherSidebar;