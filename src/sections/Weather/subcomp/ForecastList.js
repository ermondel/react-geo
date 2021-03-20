import React from 'react';
import { connect } from 'react-redux';
import { forecastsDelete, citySelected } from '../actions/weather';
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
        onForecastDelete={() => props.forecastsDelete(forecast.city.id)}
        onCitySelected={() => props.citySelected(forecast.city)}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  list: state.forecastList,
  view: state.forecastView,
  timePeriod: state.forecastTimePeriod,
});

export default connect(mapStateToProps, { forecastsDelete, citySelected })(ForecastList);
