import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/middleware';
import { selectBlogUser } from '../actions/common';
import PostItem from './PostItem';

class PostList extends Component {
  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.fetchBlogPosts();
    }
  }

  render() {
    if (!this.props.posts.length) {
      return null;
    }

    return (
      <div className='post-list'>
        {this.props.posts.map((post) => (
          <PostItem
            post={post}
            user={this.props.user}
            onItemClick={() => this.props.selectBlogUser(post.user)}
            key={post.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.blogPosts,
  user: state.blogUser,
});

export default connect(mapStateToProps, {
  fetchBlogPosts,
  selectBlogUser,
})(PostList);
