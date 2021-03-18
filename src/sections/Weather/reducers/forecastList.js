import {
  WEATHER_FORECASTS_FETCH_SUCCESS,
  WEATHER_FORECASTS_REMOVE_ITEM,
} from '@redux/types';

// existing forecast will be overwritten
// a new or changed forecast is always at the top of the list
const appending = (newForecast, list) => {
  let newItem = null;
  const newList = list.filter((forecast) => {
    if (newForecast.city.id === forecast.city.id) {
      newItem = newForecast;
      return false;
    } else {
      return true;
    }
  });
  newList.unshift(newItem ? newItem : newForecast);
  return newList;
};

export default (state = [], action) => {
  switch (action.type) {
    case WEATHER_FORECASTS_FETCH_SUCCESS:
      return appending(action.payload, state);

    case WEATHER_FORECASTS_REMOVE_ITEM:
      return state.filter((forecast) => forecast.city.id !== action.id);

    default:
      return state;
  }
};
