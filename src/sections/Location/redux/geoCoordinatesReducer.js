import { GEOLOCATION_SET_COORDINATES } from './types';

export default (state = null, action) => {
  if (action.type === GEOLOCATION_SET_COORDINATES) {
    return action.coordinates;
  }

  return state;
};
