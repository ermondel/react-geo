import React, { useRef } from 'react';
import { connect } from 'react-redux';

const GeoMap = ({ geoMap }) => {
  const mapEl = useRef(null);

  let className = 'geolocation-map';

  if (
    geoMap.visible &&
    geoMap.coordinates &&
    geoMap.coordinates.latitude &&
    geoMap.coordinates.longitude &&
    window.google &&
    window.google.maps
  ) {
    if (!mapEl.current.hasChildNodes()) {
      new window.google.maps.Map(mapEl.current, {
        zoom: 12,
        center: {
          lat: geoMap.coordinates.latitude,
          lng: geoMap.coordinates.longitude,
        },
      });
    }

    className += ` ${className}--visible`;
  }

  return <div className={className} ref={mapEl} />;
};

const mapStateToProps = (state) => ({ geoMap: state.geoMap });

export default connect(mapStateToProps)(GeoMap);
