import React from 'react';
import PodcastList from '../subcomp/PodcastList';

const PodcastsContent = (props) => (
  <main className='main'>
    <h2 className='main__title'>Podcasts</h2>

    <PodcastList />
  </main>
);

export default PodcastsContent;
