import { nodeapiserver } from '@lib/api';
import {
  WEATHER_FORECASTS_FETCH_REQUEST,
  WEATHER_FORECASTS_FETCH_SUCCESS,
  WEATHER_FORECASTS_FETCH_FAILURE,
  WEATHER_FORECASTS_REMOVE_ITEM,
  WEATHER_FORECASTS_DISABLE_ERROR,
  WEATHER_FORECASTS_VIEW_CHANGED,
  WEATHER_CITY_SELECTED,
  WEATHER_TIME_PERIOD_CHANGED,
  WEATHER_MAP_STATUS_NONE,
  WEATHER_MAP_STATUS_LOADING,
  WEATHER_MAP_STATUS_READY,
  WEATHER_MAP_STATUS_ERROR,
} from '@redux/types';

export const forecastsFetch = (city) => async (dispatch) => {
  dispatch({
    type: WEATHER_FORECASTS_FETCH_REQUEST,
    query: city,
  });

  try {
    const forecasts = await nodeapiserver.get('/request/openweathermap', {
      params: { q: city, units: 'metric' },
    });

    dispatch({
      type: WEATHER_FORECASTS_FETCH_SUCCESS,
      payload: forecasts.data,
      query: city,
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch({
        type: WEATHER_FORECASTS_FETCH_FAILURE,
        status: 404,
        query: city,
      });
    } else {
      dispatch({
        type: WEATHER_FORECASTS_FETCH_FAILURE,
        status: 500,
        query: city,
      });
    }
  }
};

export const forecastsDelete = (id) => ({
  type: WEATHER_FORECASTS_REMOVE_ITEM,
  id,
});

export const forecastsDisableError = () => ({
  type: WEATHER_FORECASTS_DISABLE_ERROR,
});

export const forecastsViewMode = (view = 'line') => ({
  type: WEATHER_FORECASTS_VIEW_CHANGED,
  view,
});

export const citySelected = (city) => ({
  type: WEATHER_CITY_SELECTED,
  city,
});

export const changeTimePeriod = (timePeriod = 'day') => ({
  type: WEATHER_TIME_PERIOD_CHANGED,
  timePeriod,
});

export const mountMap = () => async (dispatch) => {
  dispatch({ type: WEATHER_MAP_STATUS_LOADING });

  const el = document.createElement('script');

  try {
    const response = await nodeapiserver.get('/opt/axqf9i');

    el.src = `https://maps.googleapis.com/maps/api/js?key=${response.data.opt}`;
    el.async = true;
    el.onload = () => {
      dispatch({ type: WEATHER_MAP_STATUS_READY });
    };
    el.id = 'google-map';

    document.body.appendChild(el);
  } catch (error) {
    dispatch({ type: WEATHER_MAP_STATUS_ERROR });
  }
};

export const resetMap = () => ({
  type: WEATHER_MAP_STATUS_NONE,
});
