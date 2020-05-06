import React from 'react';
import { connect } from 'react-redux';
import AppAboutTech from '../AppAboutTech';

const PodcastDetail = ({ podcast }) => {
  let content = podcast ? (
    <div className='detail'>
      <h3 className='detail__title'>{podcast.title}</h3>
      <p className='detail__item'>
        <span className='l'>Duration</span>{' '}
        <span className='r'>{podcast.duration}</span>
      </p>
      <p className='detail__item'>
        <span className='l'>Author</span>{' '}
        <span className='r'>{podcast.author}</span>
      </p>
      <p className='detail__btns'>
        <button className='detail__btn_main' title='disabled!'>
          Play
        </button>
        <a href='/podcasts' className='detail__btn_link' title='disabled!'>
          download
        </a>
      </p>
    </div>
  ) : null;

  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        {content}
        <AppAboutTech list={['React', 'Redux']} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  podcast: state.podcast,
});

export default connect(mapStateToProps)(PodcastDetail);
