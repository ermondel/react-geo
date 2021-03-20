import { NONE, LOADING, READY, ERROR } from './MountMapStatuses';
import {
  GOOGLEMAP_MOUNT_STATUS_NONE,
  GOOGLEMAP_MOUNT_STATUS_LOADING,
  GOOGLEMAP_MOUNT_STATUS_READY,
  GOOGLEMAP_MOUNT_STATUS_ERROR,
} from './MountMapTypes';

export default (state = NONE, action) => {
  switch (action.type) {
    case GOOGLEMAP_MOUNT_STATUS_NONE:
      return NONE;

    case GOOGLEMAP_MOUNT_STATUS_LOADING:
      return LOADING;

    case GOOGLEMAP_MOUNT_STATUS_READY:
      return READY;

    case GOOGLEMAP_MOUNT_STATUS_ERROR:
      return ERROR;

    default:
      return state;
  }
};
