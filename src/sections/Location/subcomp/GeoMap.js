import React, { Component } from 'react';
import { connect } from 'react-redux';

class GeoMap extends Component {
  constructor(props) {
    super(props);

    this.mapEl = React.createRef();
    this.className = 'geolocation-map';
  }

  mountMap() {
    if (!this.mapEl.current || this.mapEl.current.hasChildNodes()) {
      return;
    }

    const { geoMap } = this.props;

    if (
      geoMap.coordinates &&
      geoMap.coordinates.latitude &&
      geoMap.coordinates.longitude &&
      window.google &&
      window.google.maps
    ) {
      new window.google.maps.Map(this.mapEl.current, {
        zoom: 12,
        center: {
          lat: geoMap.coordinates.latitude,
          lng: geoMap.coordinates.longitude,
        },
      });
    }
  }

  componentDidMount() {
    if (this.props.geoMap.visible) {
      this.mountMap();
    }
  }

  render() {
    let { className } = this;

    if (this.props.geoMap.visible) {
      this.mountMap();

      className += ` ${className}--visible`;
    }

    return <div className={className} ref={this.mapEl} />;
  }
}

const mapStateToProps = (state) => ({ geoMap: state.geoMap });

export default connect(mapStateToProps)(GeoMap);
