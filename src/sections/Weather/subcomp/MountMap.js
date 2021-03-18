import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mountMap, resetMap } from '../actions/weather';
import { ErrorRemote, SpinnerSmall } from '@subcomponents/UtilImages';

const MountMapLoading = () => (
  <div className='mount-map-spinner'>
    <SpinnerSmall />
    <p>loading maps</p>
  </div>
);

const MountMapError = () => (
  <div className='mount-map-error'>
    <ErrorRemote />
    <p>the remote server is unavailable</p>
  </div>
);

class MountMap extends Component {
  componentDidMount() {
    if (this.props.mapStatus === 'none') {
      this.props.mountMap();
    }
  }

  componentWillUnmount() {
    if (this.props.mapStatus === 'error') {
      this.props.resetMap();
    }
  }

  render() {
    switch (this.props.mapStatus) {
      case 'loading':
        return <MountMapLoading />;

      case 'error':
        return <MountMapError />;

      case 'none':
      case 'ready':
      default:
        return null;
    }
  }
}

const mapStateToProps = (state) => ({ mapStatus: state.forecastMountMap });

export default connect(mapStateToProps, { mountMap, resetMap })(MountMap);
