import { GEOLOCATION_OPEN_MAP, GEOLOCATION_CLOSE_MAP } from './types';

const defaultState = {
  coordinates: null,
  visible: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GEOLOCATION_OPEN_MAP:
      return {
        coordinates: action.coordinates,
        visible: true,
      };

    case GEOLOCATION_CLOSE_MAP:
      return {
        coordinates: state.coordinates,
        visible: false,
      };

    default:
      return state;
  }
};
