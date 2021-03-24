import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';
import compassImage from '../assets/compass_x60.png';

const CoordinateBlock = (props) => {
  if (!props.geoCoordinates) {
    return null;
  }

  return (
    <InfoBlock
      title='Your coordinates'
      data={{
        latitude: props.geoCoordinates.latitude.toFixed(6),
        longitude: props.geoCoordinates.longitude.toFixed(6),
        accuracy: props.geoCoordinates.accuracy,
      }}
      titleImage={compassImage}
    />
  );
};

const mapStateToProps = (state) => ({ geoCoordinates: state.geoCoordinates });

export default connect(mapStateToProps)(CoordinateBlock);
