import {
  GEOLOCATION_SET_COORDINATES,
  GEOLOCATION_OPEN_MAP,
  GEOLOCATION_CLOSE_MAP,
} from '../types/locationReduxTypes';

export const setCoordinates = (coordinates) => ({
  type: GEOLOCATION_SET_COORDINATES,
  coordinates,
});

export const openGeoMap = (coordinates) => ({
  type: GEOLOCATION_OPEN_MAP,
  coordinates,
});

export const closeGeoMap = () => ({
  type: GEOLOCATION_CLOSE_MAP,
});
