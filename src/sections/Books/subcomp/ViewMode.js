import React from 'react';
import { connect } from 'react-redux';
import { changeBooksView } from '../actions/common';
import BtnsBlock from '@sidebar/BtnsBlock';
import BtnsBlockItem from '@buttons/BtnsBlockItem';
import { LIST, GALLERY } from '../types/booksViewMode';

const ViewMode = ({ view, changeBooksView }) => (
  <BtnsBlock>
    <BtnsBlockItem
      value={'List'}
      disabled={view === LIST}
      onClick={() => changeBooksView(LIST)}
    />
    <BtnsBlockItem
      value={'Gallery'}
      disabled={view === GALLERY}
      onClick={() => changeBooksView(GALLERY)}
    />
  </BtnsBlock>
);

const mapStateToProps = (state) => ({ view: state.booksView });

export default connect(mapStateToProps, { changeBooksView })(ViewMode);
