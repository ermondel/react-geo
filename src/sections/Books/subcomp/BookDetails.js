import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';
import { closeBook } from '../actions/common';

const BookDetails = ({ book, closeBook }) => {
  return book ? (
    <InfoBlock
      title={book.title}
      data={{
        author: book.author,
        year: book.year,
        genre: book.genre,
        publisher: book.publisher,
        pages: book.pages,
      }}
      showControlBtns={true}
      onClose={closeBook}
    />
  ) : null;
};

const mapStateToProps = (state) => ({ book: state.bookActive });

export default connect(mapStateToProps, { closeBook })(BookDetails);
