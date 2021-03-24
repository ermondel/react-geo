import { GEOLOCATION_SET_COORDINATES } from './types';
import { GEOLOCATION_OPEN_MAP } from './types';

export const setCoordinates = (coordinates) => ({
  type: GEOLOCATION_SET_COORDINATES,
  coordinates,
});

export const openGeoMap = (coordinates) => ({
  type: GEOLOCATION_OPEN_MAP,
  coordinates,
});
