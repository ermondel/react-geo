export default {
  forecastList: require('./forecastListReducer').default,
  forecastSpinner: require('./forecastSpinnerReducer').default,
  forecastError: require('./forecastErrorReducer').default,
  forecastView: require('./forecastViewReducer').default,
  forecastCity: require('./forecastCityReducer').default,
  forecastTimePeriod: require('./forecastTimePeriodReducer').default,
  forecastCityInfo: require('./forecastCityInfoReducer').default,
};
