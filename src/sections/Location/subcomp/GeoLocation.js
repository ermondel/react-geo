import React from 'react';
import { connect } from 'react-redux';
import { setCoordinates } from '../actions/common';
import useLocation from '../resources/useLocation';
import { SpinnerBig } from '@subcomponents/UtilImages';
import GeoLocationMapInfo from './GeoLocationMapInfo';

const GeoLocationDisabled = () => (
  <div className='geolocation-message'>
    <p className='geolocation-message__warning'>
      The positioning function is disabled. Please open this page in Google Chrome.
    </p>
  </div>
);

const GeoLocationWait = () => (
  <div className='geolocation-message'>
    <div className='geolocation-message__spinner'>
      <SpinnerBig />
      <p>Please accept location request</p>
    </div>
  </div>
);

const GeoLocationErrorMessage = ({ message }) => (
  <div className='geolocation-message'>
    <p className='geolocation-message__error'>{message}</p>
  </div>
);

// default

const GeoLocation = (props) => {
  const [coords, errorMessage] = useLocation(props.setCoordinates);

  if (!window.chrome) {
    return <GeoLocationDisabled />;
  }

  if (!coords && !errorMessage) {
    return <GeoLocationWait />;
  }

  if (errorMessage) {
    return <GeoLocationErrorMessage message={errorMessage} />;
  }

  if (coords) {
    return <GeoLocationMapInfo coords={coords} />;
  }

  return null;
};

export default connect(undefined, { setCoordinates })(GeoLocation);
