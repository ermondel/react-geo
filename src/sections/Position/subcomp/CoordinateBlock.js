import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';

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
    />
  );
};

const mapStateToProps = (state) => ({ geoCoordinates: state.geoCoordinates });

export default connect(mapStateToProps)(CoordinateBlock);
