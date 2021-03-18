import React from 'react';
import { connect } from 'react-redux';
import { SpinnerBig } from '@subcomponents/UtilImages';

const ForecastLoadingInfo = (props) => {
  if (!props.spinner) {
    return null;
  }

  return (
    <div className='forecast-info'>
      <div className='forecast-info__header'>
        <h3 className='forecast-info__title'>{props.spinner.query}</h3>
        <div className='forecast-info__btns'>{null}</div>
      </div>
      <div className='forecast-info__body'>
        <div className='forecast-info__spinner'>
          <SpinnerBig />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ spinner: state.forecastSpinner });

export default connect(mapStateToProps)(ForecastLoadingInfo);
