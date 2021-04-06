import React from 'react';
import { connect } from 'react-redux';
import { searchPosts } from '../actions/common';

const SearchForm = ({ query, searchPosts }) => (
  <div className='list-ctrl__search'>
    <input
      type='text'
      value={query}
      onChange={(event) => searchPosts(event.target.value)}
      placeholder='Find a post by title or category...'
      className='list-ctrl__search-input'
    />
  </div>
);

const mapStateToProps = (state) => ({ query: state.postsSearch });

export default connect(mapStateToProps, { searchPosts })(SearchForm);
