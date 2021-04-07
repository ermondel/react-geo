import { PODCASTS_ITEM_SELECTED } from '../types/podcastsReduxTypes';

export const selectPodcast = (podcast) => ({
  type: PODCASTS_ITEM_SELECTED,
  payload: podcast,
});
