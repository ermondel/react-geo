import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPosts, fetchPostsAuth } from '../actions/middleware';
import { resetStatus } from '../actions/common';
import List from '../subcomp/List';
import Add from '../subcomp/Add';
import View from '../subcomp/View';
import {
  AuthSpinner,
  AuthSuccess,
  AuthError,
  LoadingSpinner,
  LoadingError,
} from '../subcomp/Service';
import {
  AUTH,
  ALLOW,
  DENIED,
  LOADING,
  SUCCESS,
  FAILURE,
  DEFAULT,
} from '../types/postsStatuses';

class Dashboard extends Component {
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
            <Route path='/posts' exact component={List} />
            <Route path='/posts/add' exact component={Add} />
            <Route path='/posts/:id' exact component={View} />
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
})(Dashboard);
