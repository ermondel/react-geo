import React from 'react';
import { connect } from 'react-redux';
import { changeTimePeriod } from '../actions/common';
import BtnsInlineBlock from '@sidebar/BtnsInlineBlock';
import BtnsInlineBlockItem from '@buttons/BtnsInlineBlockItem';
import { DAY, NIGHT, EVENING, AFTERNOON, MORNING } from '../types/weatherTimePeriod';

const TimePeriod = ({ timePeriod, changeTimePeriod }) => (
  <BtnsInlineBlock>
    <BtnsInlineBlockItem
      value={'Morning'}
      disabled={timePeriod === MORNING}
      onClick={() => changeTimePeriod(MORNING)}
    />
    <BtnsInlineBlockItem
      value={'Afternoon'}
      disabled={timePeriod === AFTERNOON}
      onClick={() => changeTimePeriod(AFTERNOON)}
    />
    <BtnsInlineBlockItem
      value={'Evening'}
      disabled={timePeriod === EVENING}
      onClick={() => changeTimePeriod(EVENING)}
    />
    <BtnsInlineBlockItem
      value={'Night'}
      disabled={timePeriod === NIGHT}
      onClick={() => changeTimePeriod(NIGHT)}
    />
    <BtnsInlineBlockItem
      value={'Day'}
      disabled={timePeriod === DAY}
      onClick={() => changeTimePeriod(DAY)}
    />
  </BtnsInlineBlock>
);

const mapStateToProps = (state) => ({ timePeriod: state.forecastTimePeriod });

export default connect(mapStateToProps, { changeTimePeriod })(TimePeriod);
