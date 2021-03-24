import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const GeoMap = (props) => {
  const mapEl = useRef(null);

  let showMap = false;
  let className = 'geolocation-map';

  if (
    props.geoMap &&
    props.geoMap.latitude &&
    props.geoMap.longitude &&
    window.google &&
    window.google.maps
  ) {
    showMap = true;
    className += ` ${className}--visible`;
  }

  useEffect(() => {
    if (showMap) {
      new window.google.maps.Map(mapEl.current, {
        zoom: 12,
        center: {
          lat: props.geoMap.latitude,
          lng: props.geoMap.longitude,
        },
      });
    }
  });

  return <div className={className} ref={mapEl} />;
};

const mapStateToProps = (state) => ({ geoMap: state.geoMap });

export default connect(mapStateToProps)(GeoMap);
