import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';
import { closeCityInfo } from '../actions/weather';
import { timezoneSecondsToHours, unixTimeToHM } from '@lib/time';

const CityInfo = ({ city, closeCityInfo }) => {
  return city ? (
    <InfoBlock
      title={city.name}
      data={{
        country: city.country,
        population: city.population.toLocaleString(),
        timezone: timezoneSecondsToHours(city.timezone),
        sunrise: unixTimeToHM(city.sunrise),
        sunset: unixTimeToHM(city.sunset),
        latitude: city.coord.lat,
        longitude: city.coord.lon,
      }}
      showControlBtns={true}
      onClose={closeCityInfo}
      titleModifier={'city-info'}
    />
  ) : null;
};

const mapStateToProps = (state) => ({ city: state.forecastCityInfo });

export default connect(mapStateToProps, { closeCityInfo })(CityInfo);
