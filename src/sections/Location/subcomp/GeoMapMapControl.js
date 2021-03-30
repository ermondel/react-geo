import React from 'react';
import { connect } from 'react-redux';
import { closeGeoMap } from '../redux/actions';
import BtnsBlock from '@sidebar/BtnsBlock';
import BtnsBlockItem from '@buttons/BtnsBlockItem';

const GeoMapMapControl = ({ geoMap, closeGeoMap }) => {
  if (!geoMap.visible) {
    return null;
  }

  return (
    <BtnsBlock>
      <BtnsBlockItem value='Close map' onClick={() => closeGeoMap()} />
    </BtnsBlock>
  );
};

const mapStateToProps = (state) => ({ geoMap: state.geoMap });

export default connect(mapStateToProps, { closeGeoMap })(GeoMapMapControl);
