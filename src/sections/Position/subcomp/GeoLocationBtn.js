import React from 'react';
import { connect } from 'react-redux';
import { openGeoMap } from '../redux/actions';

const GeoLocationBtn = (props) => {
  switch (props.mapStatus) {
    case 'NONE':
      return null;

    case 'LOADING':
      return <p>Loading maps ...</p>;

    case 'READY':
      return (
        <p className='geolocation-message__btns'>
          <button
            className='geolocation-message__btn-open-map'
            onClick={() => props.openGeoMap(props.coords)}
          >
            View on the map
          </button>
        </p>
      );

    case 'ERROR':
      return <p className='geolocation-message__error'>Error loading maps</p>;

    default:
      return null;
  }
};

const mapStateToProps = (state) => ({ mapStatus: state.mountGooglemap });

export default connect(mapStateToProps, { openGeoMap })(GeoLocationBtn);
