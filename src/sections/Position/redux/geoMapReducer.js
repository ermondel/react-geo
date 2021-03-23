import { GEOLOCATION_OPEN_MAP } from './types';

export default (state = null, action) => {
  if (action.type === GEOLOCATION_OPEN_MAP) {
    return action.coordinates;
  }

  return state;
};
