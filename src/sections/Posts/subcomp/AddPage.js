import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddForm from './AddForm';
import { createPost } from '../actions/middleware';
import { resetAddStatus } from '../actions/common';
import SavingSpinner from './SavingSpinner';
import SavingError from './SavingError';
import { SAVING, SUCCESS, FAILURE, DEFAULT } from '../types/postsStatuses';

class AddPage extends Component {
  componentWillUnmount() {
    if (this.props.status !== DEFAULT) {
      this.props.resetAddStatus();
    }
  }

  createPost = (newValues) => {
    this.props.createPost(this.props.authData.publicKey, newValues);
  };

  renderContent() {
    switch (this.props.status) {
      case SAVING:
        return <SavingSpinner />;

      case SUCCESS:
        return <Redirect to='/posts' />;

      case FAILURE:
        return <SavingError />;

      case DEFAULT:
      default:
        return <AddForm onSubmit={this.createPost} />;
    }
  }

  render() {
    return (
      <div>
        <h2 className='main__title'>New post</h2>

        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.postsAdding,
  authData: state.postsAuth,
});

export default connect(mapStateToProps, { createPost, resetAddStatus })(AddPage);
