import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPosts, fetchPostsAuth } from '../actions/middleware';
import { resetStatus } from '../actions/common';
import ListPage from './ListPage';
import AddPage from './AddPage';
import ViewPage from './ViewPage';
import LoadingSpinner from './LoadingSpinner';
import AuthSpinner from './AuthSpinner';
import LoadingError from './LoadingError';
import AuthError from './AuthError';
import AuthSuccess from './AuthSuccess';
import {
  AUTH,
  ALLOW,
  DENIED,
  LOADING,
  SUCCESS,
  FAILURE,
  DEFAULT,
} from '../types/postsStatuses';

class PostDashboard extends Component {
  componentDidMount() {
    if (!this.props.postsList.length) {
      if (this.props.authData.publicKey) {
        this.props.fetchPosts(this.props.authData.publicKey);
      } else {
        this.props.fetchPostsAuth();
      }
    }
  }

  componentWillUnmount() {
    if (this.props.postsStatus !== DEFAULT) {
      this.props.resetStatus();
    }
  }

  renderContent() {
    switch (this.props.postsStatus) {
      case AUTH:
        return <AuthSpinner />;

      case ALLOW:
        return <AuthSuccess />;

      case DENIED:
        return <AuthError />;

      case LOADING:
        return <LoadingSpinner />;

      case FAILURE:
        return <LoadingError />;

      case SUCCESS:
      default:
        return (
          <Switch>
            <Route path='/posts' exact component={ListPage} />
            <Route path='/posts/add' exact component={AddPage} />
            <Route path='/posts/:id' exact component={ViewPage} />
          </Switch>
        );
    }
  }

  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  postsStatus: state.postsStatus,
  postsList: state.postsList,
  authData: state.postsAuth,
});

export default connect(mapStateToProps, {
  fetchPosts,
  fetchPostsAuth,
  resetStatus,
})(PostDashboard);
