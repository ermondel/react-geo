import React from 'react';
import { connect } from 'react-redux';
import { forecastsFetch } from '../actions/weather';

const ForecastsSearchForm = ({ spinner, forecastsFetch }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const city = event.target.forecast_query_input.value.trim();

    if (city) {
      forecastsFetch(city);
    }

    event.target.forecast_query_input.value = '';
    event.target.forecast_btn_submit.blur();
  };

  return (
    <div className='forecast_search-form'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='forecast_query_input'
          className='forecast__query-input'
          placeholder='city ​​name'
        />
        <button
          name='forecast_btn_submit'
          className='forecast__btn-submit'
          disabled={spinner ? true : false}
        >
          {spinner ? 'wait ....' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ spinner: state.forecastSpinner });

export default connect(mapStateToProps, { forecastsFetch })(ForecastsSearchForm);
