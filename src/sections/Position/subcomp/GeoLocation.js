import React from 'react';
import { connect } from 'react-redux';
import useLocation from '../resources/useLocation';
import { SpinnerBig } from '@subcomponents/UtilImages';
import GeoLocationBtn from './GeoLocationBtn';
import { setCoordinates } from '../redux/actions';

const GeoLocation = (props) => {
  const [coords, errorMessage] = useLocation(props.setCoordinates);

  if (props.disabled) {
    return null;
  }

  if (!window.chrome) {
    return (
      <div className='geolocation-message'>
        <p className='geolocation-message__warning'>
          The positioning function is disabled. Please open this page in Google Chrome.
        </p>
      </div>
    );
  }

  if (!coords && !errorMessage) {
    return (
      <div className='geolocation-message'>
        <div className='geolocation-message__spinner'>
          <SpinnerBig />
          <p>Please accept location request</p>
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className='geolocation-message'>
        <p className='geolocation-message__error'>{errorMessage}</p>
      </div>
    );
  }

  if (coords) {
    return (
      <div className='geolocation-message'>
        <GeoLocationBtn coords={coords} />
      </div>
    );
  }

  return null;
};

export default connect(undefined, { setCoordinates })(GeoLocation);
