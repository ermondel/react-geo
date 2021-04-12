import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMessage } from '../actions/common';

class ListControlMessage extends Component {
  componentWillUnmount() {
    if (this.props.message) {
      this.props.removeMessage();
    }
  }

  render() {
    return this.props.message ? (
      <div className='list-ctrl__message'>
        <p className='list-ctrl__message-text'>{this.props.message}</p>
        <button
          className='list-ctrl__message-close'
          onClick={this.props.removeMessage}
          title='Close message'
        >
          X
        </button>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({ message: state.postsMessage });

export default connect(mapStateToProps, { removeMessage })(ListControlMessage);
