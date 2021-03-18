import React from 'react';
import ForecastsSearchForm from '../subcomp/ForecastsSearchForm';
import ForecastLoadingInfo from '../subcomp/ForecastLoadingInfo';
import ForecastErrorInfo from '../subcomp/ForecastErrorInfo';
import ForecastList from '../subcomp/ForecastList';
import ModalMap from '../subcomp/ModalMap';

const WeatherContent = () => (
  <main className='main'>
    <h2 className='main__title'>Weather</h2>

    <ForecastsSearchForm />
    <ForecastLoadingInfo />
    <ForecastErrorInfo />
    <ForecastList />
    <ModalMap />
  </main>
);

export default WeatherContent;
