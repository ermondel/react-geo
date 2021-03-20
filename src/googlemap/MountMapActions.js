import { nodeapiserver } from '@lib/api';
import {
  GOOGLEMAP_MOUNT_STATUS_NONE,
  GOOGLEMAP_MOUNT_STATUS_LOADING,
  GOOGLEMAP_MOUNT_STATUS_READY,
  GOOGLEMAP_MOUNT_STATUS_ERROR,
} from './MountMapTypes';

const NONE = { type: GOOGLEMAP_MOUNT_STATUS_NONE };
const LOADING = { type: GOOGLEMAP_MOUNT_STATUS_LOADING };
const READY = { type: GOOGLEMAP_MOUNT_STATUS_READY };
const ERROR = { type: GOOGLEMAP_MOUNT_STATUS_ERROR };

export const mountMap = () => async (dispatch) => {
  const googlemapEl = document.getElementById('googlemap');

  if (googlemapEl) {
    dispatch(READY);
    return;
  }

  dispatch(LOADING);

  try {
    const el = document.createElement('script');
    const response = await nodeapiserver.get('/opt/axqf9i');

    el.src = `https://maps.googleapis.com/maps/api/js?key=${response.data.opt}`;
    el.async = true;
    el.onload = () => dispatch(READY);
    el.id = 'googlemap';

    document.body.appendChild(el);
  } catch (error) {
    dispatch(ERROR);
  }
};

export const resetMap = () => NONE;
