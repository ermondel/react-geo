import { nodeapiserver } from '@lib/api';
import {
  WEATHER_FORECASTS_FETCH_REQUEST,
  WEATHER_FORECASTS_FETCH_SUCCESS,
  WEATHER_FORECASTS_FETCH_FAILURE,
  WEATHER_FORECASTS_DELETE,
  WEATHER_FORECASTS_ERROR_HIDE,
  WEATHER_FORECASTS_VIEW_CHANGED,
  WEATHER_CITY_SELECTED,
  WEATHER_MOUNT_MAP_SUCCESS,
  WEATHER_MOUNT_MAP_FAILURE,
  WEATHER_TIME_PERIOD_CHANGED,
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
    if (error.response.status === 404) {
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
  type: WEATHER_FORECASTS_DELETE,
  id,
});

export const forecastsErrorHide = () => ({
  type: WEATHER_FORECASTS_ERROR_HIDE,
});

export const forecastsViewMode = (view = 'line') => ({
  type: WEATHER_FORECASTS_VIEW_CHANGED,
  view,
});

export const citySelected = (city) => ({
  type: WEATHER_CITY_SELECTED,
  city,
});

export const mountMap = () => async (dispatch) => {
  const el = document.createElement('script');

  try {
    const response = await nodeapiserver.get('/opt/axqf9i');
    el.src = `https://maps.googleapis.com/maps/api/js?key=${response.data.opt}`;
    el.async = true;
    el.onload = () => {
      dispatch({ type: WEATHER_MOUNT_MAP_SUCCESS });
    };
    document.body.appendChild(el);
  } catch (error) {
    dispatch({ type: WEATHER_MOUNT_MAP_FAILURE });
  }
};

export const changeTimePeriod = (timePeriod = 'day') => ({
  type: WEATHER_TIME_PERIOD_CHANGED,
  timePeriod,
});
