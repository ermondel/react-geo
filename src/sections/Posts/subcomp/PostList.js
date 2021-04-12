import React from 'react';
import { connect } from 'react-redux';
import { removePostConfirm } from '../actions/common';
import PostListItem from './PostListItem';
import { filterObjListByQuery } from '@lib/filters';
import { OLD } from '../types/postsSortType';

const PostList = ({ postsList, sortType, searchQuery, removePostConfirm }) => {
  let posts;

  if (sortType === OLD) {
    posts = postsList.map((val, i, arr) => arr[arr.length - i - 1]);
  } else {
    posts = [...postsList];
  }

  if (searchQuery) {
    posts = filterObjListByQuery(posts, searchQuery, 'title, categories');
  }

  if (!posts.length) {
    return <p>No posts found</p>;
  }

  return (
    <div className='pst-list'>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onRemoveClick={() => removePostConfirm(post)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  postsList: state.postsList,
  searchQuery: state.postsSearch,
  sortType: state.postsSort,
});

export default connect(mapStateToProps, { removePostConfirm })(PostList);
