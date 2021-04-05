import {
  WEATHER_REMOVE_CITY,
  WEATHER_DISABLE_ERROR,
  WEATHER_CHANGE_VIEW_MODE,
  WEATHER_OPEN_CITY_MAP,
  WEATHER_CHANGE_TIME_PERIOD,
  WEATHER_OPEN_CITY_INFO,
  WEATHER_CLOSE_CITY_INFO,
} from '../types/weatherReduxTypes';
import { LINE } from '../types/weatherViewMode';
import { DAY } from '../types/weatherTimePeriod';

export const removeCity = (id) => ({
  type: WEATHER_REMOVE_CITY,
  id,
});

export const disableError = () => ({
  type: WEATHER_DISABLE_ERROR,
});

export const changeViewMode = (view = LINE) => ({
  type: WEATHER_CHANGE_VIEW_MODE,
  view,
});

export const openCityMap = (city) => ({
  type: WEATHER_OPEN_CITY_MAP,
  city,
});

export const changeTimePeriod = (timePeriod = DAY) => ({
  type: WEATHER_CHANGE_TIME_PERIOD,
  timePeriod,
});

export const openCityInfo = (info) => ({
  type: WEATHER_OPEN_CITY_INFO,
  info,
});

export const closeCityInfo = () => ({
  type: WEATHER_CLOSE_CITY_INFO,
});
