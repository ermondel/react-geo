import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { removePostConfirm, resetViewStatus } from '../actions/common';
import PostItem from './PostItem';
import { DEFAULT, DELETED } from '../types/postsStatuses';

class View extends Component {
  componentWillUnmount() {
    if (this.props.status !== DEFAULT) {
      this.props.resetViewStatus();
    }
  }

  searchPost() {
    const { match, postsList } = this.props;

    if (postsList.length) {
      return postsList.find((el) => String(el.id) === match.params.id);
    }
  }

  renderNotFound() {
    return (
      <div>
        <h2 className='section-title'>Post not found</h2>

        <Link to={'/posts'} className='pst-list__link-back'>
          Go back to the list
        </Link>
      </div>
    );
  }

  render() {
    if (this.props.status === DELETED) {
      return <Redirect to='/posts' />;
    }

    const post = this.searchPost();

    if (!post) {
      return this.renderNotFound();
    }

    return (
      <PostItem post={post} onRemoveClick={() => this.props.removePostConfirm(post)} />
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.postsView,
  postsList: state.postsList,
});

export default connect(mapStateToProps, {
  removePostConfirm,
  resetViewStatus,
})(View);
