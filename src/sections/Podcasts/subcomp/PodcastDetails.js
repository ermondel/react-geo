import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';

const PodcastDetails = ({ podcast }) => {
  const buttons = (
    <div className='podcast-infoblock__btns'>
      <button className='podcast-infoblock__btn-main' title='disabled!'>
        Play
      </button>
      <a href='/#/podcasts' className='podcast-infoblock__btn-link' title='disabled!'>
        download
      </a>
    </div>
  );

  return podcast ? (
    <InfoBlock
      title={podcast.title}
      data={{
        duration: podcast.duration,
        author: podcast.author,
      }}
      buttons={buttons}
    />
  ) : null;
};

const mapStateToProps = (state) => ({ podcast: state.podcast });

export default connect(mapStateToProps)(PodcastDetails);
