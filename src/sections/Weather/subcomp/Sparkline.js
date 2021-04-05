import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import { BARS } from '../types/weatherViewMode';

const Sparkline = (props) => (
  <div className={props.classEl}>
    <Sparklines data={props.list}>
      {props.view === BARS ? (
        <SparklinesBars style={{ fill: props.colorBar }} />
      ) : (
        <SparklinesLine color={props.colorLine} />
      )}
    </Sparklines>
    <p className={props.classLegend}>
      {props.name}: {props.avg} {props.units}
    </p>
  </div>
);

export default Sparkline;
