import React from 'react';
import { connect } from 'react-redux';
import { selectPodcast } from '../actions/common';
import PodcastItem from '../subcomp/PodcastItem';
import podcasts from '../sources/podcastsSource';

const PodcastList = (props) => (
  <div className='podcast-list'>
    {podcasts.map((podcast) => (
      <PodcastItem
        key={podcast.id}
        podcast={podcast}
        isActive={props.activeID === podcast.id}
        onClickHandler={() => props.selectPodcast(podcast)}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  activeID: state.podcast ? state.podcast.id : null,
});

export default connect(mapStateToProps, { selectPodcast })(PodcastList);
