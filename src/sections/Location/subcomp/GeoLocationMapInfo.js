import React from 'react';
import { connect } from 'react-redux';
import { openGeoMap } from '../actions/common';
import { NONE, LOADING, READY, ERROR } from '@googlemap/MountMapStatuses';

const GeoLocationMapInfo = (props) => {
  let content;

  switch (props.mapStatus) {
    case NONE:
      content = null;
      break;

    case LOADING:
      content = <p>Loading maps ...</p>;
      break;

    case READY:
      const onOpenBtnClick = () => props.openGeoMap(props.coords);

      content = (
        <p className='geolocation-message__btns'>
          <button className='geolocation-message__btn-open-map' onClick={onOpenBtnClick}>
            View on the map
          </button>
        </p>
      );
      break;

    case ERROR:
      content = <p className='geolocation-message__error'>Error loading maps</p>;
      break;

    default:
      content = null;
  }

  return <div className='geolocation-message'>{content}</div>;
};

const mapStateToProps = (state) => ({ mapStatus: state.mountGooglemap });

export default connect(mapStateToProps, { openGeoMap })(GeoLocationMapInfo);
