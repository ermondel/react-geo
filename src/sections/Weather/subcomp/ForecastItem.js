import React from 'react';
import Sparkline from './Sparkline';
import weatherData from '../util/weatherData';
import ForecastItemHeader from './ForecastItemHeader';

const ForecastItem = (props) => {
  const colors = {
    temp: { line: '#ADD8E6', bar: '#ADD8E6' },
    pres: { line: '#BDB76B', bar: '#BDB76B' },
    humd: { line: '#FFDAB9', bar: '#FFDAB9' },
  };

  const [
    temperatureList,
    pressureList,
    humidityList,
    temperatureAverage,
    pressureAverage,
    humidityAverage,
  ] = weatherData(props.forecast.list, props.timePeriod);

  return (
    <div className='forecast'>
      <ForecastItemHeader
        cityName={props.forecast.city.name}
        onCityMapClick={props.onCityMapClick}
        onCityInfoClick={props.onCityInfoClick}
        onCityRemoveClick={props.onCityRemoveClick}
        btnMap={props.btnMap}
      />
      <div className='forecast__body'>
        <Sparkline
          name='temperature'
          list={temperatureList}
          view={props.view}
          avg={temperatureAverage}
          units={'°C'}
          colorBar={colors.temp.bar}
          colorLine={colors.temp.line}
          classEl='forecast__temperature-chart'
          classLegend='forecast__legend'
        />

        <Sparkline
          name='pressure'
          list={pressureList}
          view={props.view}
          avg={pressureAverage}
          units={'hPa'}
          colorBar={colors.pres.bar}
          colorLine={colors.pres.line}
          classEl='forecast__pressure-chart'
          classLegend='forecast__legend'
        />

        <Sparkline
          name='humidity'
          list={humidityList}
          view={props.view}
          avg={humidityAverage}
          units={'%'}
          colorBar={colors.humd.bar}
          colorLine={colors.humd.line}
          classEl='forecast__humidity-chart'
          classLegend='forecast__legend'
        />
      </div>
    </div>
  );
};

export default ForecastItem;
