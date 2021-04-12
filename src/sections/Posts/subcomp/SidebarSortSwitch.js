import React from 'react';
import { connect } from 'react-redux';
import { sortByDate } from '../actions/common';
import BtnsBlock from '@sidebar/BtnsBlock';
import BtnsBlockItem from '@buttons/BtnsBlockItem';
import { NEW, OLD } from '../types/postsSortType';

const SidebarSortSwitch = ({ type, sortByDate }) => (
  <BtnsBlock>
    <BtnsBlockItem
      value={'new'}
      disabled={type === NEW}
      onClick={() => sortByDate(NEW)}
    />
    <BtnsBlockItem
      value={'old'}
      disabled={type === OLD}
      onClick={() => sortByDate(OLD)}
    />
  </BtnsBlock>
);

const mapStateToProps = (state) => ({ type: state.postsSort });

export default connect(mapStateToProps, { sortByDate })(SidebarSortSwitch);
