import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';
import { closeCityInfo } from '../actions/common';
import { secToHours, strUTC, strHMUTC } from '@lib/time';

const CityInfo = ({ city, closeCityInfo }) => {
  return city ? (
    <InfoBlock
      title={city.name}
      data={{
        country: city.country,
        population: city.population.toLocaleString(),
        timezone: strUTC(secToHours(city.timezone)),
        sunrise: strHMUTC(city.sunrise, city.timezone),
        sunset: strHMUTC(city.sunset, city.timezone),
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
