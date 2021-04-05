import React from 'react';
import { connect } from 'react-redux';
import { removeCity, openCityMap, openCityInfo } from '../actions/common';
import ForecastItem from './ForecastItem';

const ForecastList = (props) => (
  <div className='forecasts'>
    {props.list.map((forecast) => (
      <ForecastItem
        forecast={forecast}
        view={props.view}
        btnMap={window.google && window.google.maps}
        key={forecast.city.id}
        timePeriod={props.timePeriod}
        onCityRemoveClick={(event) => {
          event.target.blur();
          props.removeCity(forecast.city.id);
        }}
        onCityMapClick={(event) => {
          event.target.blur();
          props.openCityMap(forecast.city);
        }}
        onCityInfoClick={(event) => {
          event.target.blur();
          props.openCityInfo(forecast.city);
        }}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  list: state.forecastList,
  view: state.forecastView,
  timePeriod: state.forecastTimePeriod,
});

export default connect(mapStateToProps, {
  removeCity,
  openCityMap,
  openCityInfo,
})(ForecastList);
