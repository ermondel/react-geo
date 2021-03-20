import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mountMap, resetMap } from './MountMapActions';
import { NONE, LOADING, READY, ERROR } from './MountMapStatuses';
import MountMapLoading from './MountMapLoading';
import MountMapError from './MountMapError';

class MountMap extends Component {
  componentDidMount() {
    if (this.props.status === NONE) {
      this.props.mountMap();
    }
  }

  componentWillUnmount() {
    if (this.props.status === ERROR) {
      this.props.resetMap();
    }
  }

  render() {
    switch (this.props.status) {
      case LOADING:
        return <MountMapLoading />;

      case ERROR:
        return <MountMapError />;

      case NONE:
        return null;

      case READY:
        return null;

      default:
        return null;
    }
  }
}

const mapStateToProps = (state) => ({ status: state.mountGooglemap });

export default connect(mapStateToProps, { mountMap, resetMap })(MountMap);
