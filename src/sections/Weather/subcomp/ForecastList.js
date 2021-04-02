import React from 'react';
import { connect } from 'react-redux';
import { forecastsDelete, citySelected, openCityInfo } from '../actions/weather';
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
        onForecastDelete={(event) => {
          event.target.blur();
          props.forecastsDelete(forecast.city.id);
        }}
        onCitySelected={(event) => {
          event.target.blur();
          props.citySelected(forecast.city);
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
  forecastsDelete,
  citySelected,
  openCityInfo,
})(ForecastList);
