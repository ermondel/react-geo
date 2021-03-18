import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forecastsDisableError } from '../actions/weather';

class ForecastErrorInfo extends Component {
  errors = {
    404: 'Not found. Perhaps the wrong city name was entered.',
    500: 'The remote server is not responding. Perhaps it is overloaded with requests.',
  };

  componentWillUnmount() {
    if (this.props.error) {
      this.props.forecastsDisableError();
    }
  }

  onCloseClick = () => {
    this.props.forecastsDisableError();
  };

  render() {
    if (!this.props.error) {
      return null;
    }

    const { status, query } = this.props.error;
    const message = this.errors[status] ? this.errors[status] : 'Unknown error';

    return (
      <div className='forecast-info'>
        <div className='forecast-info__header'>
          <h3 className='forecast-info__title'>{query}</h3>
          <div className='forecast-info__btns'>
            <button className='forecast-info__btn-close' onClick={this.onCloseClick}>
              Close
            </button>
          </div>
        </div>
        <div className='forecast-info__body'>
          <p>{message}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ error: state.forecastError });

export default connect(mapStateToProps, { forecastsDisableError })(ForecastErrorInfo);
