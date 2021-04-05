import React from 'react';
import { connect } from 'react-redux';
import { changeViewMode } from '../actions/common';
import BtnsBlock from '@sidebar/BtnsBlock';
import BtnsBlockItem from '@buttons/BtnsBlockItem';
import { LINE, BARS } from '../types/weatherViewMode';

const ForecastViewMode = ({ view, changeViewMode }) => (
  <BtnsBlock>
    <BtnsBlockItem
      value={'Line'}
      disabled={view === LINE}
      onClick={() => changeViewMode(LINE)}
    />
    <BtnsBlockItem
      value={'Bars'}
      disabled={view === BARS}
      onClick={() => changeViewMode(BARS)}
    />
  </BtnsBlock>
);

const mapStateToProps = (state) => ({ view: state.forecastView });

export default connect(mapStateToProps, { changeViewMode })(ForecastViewMode);
