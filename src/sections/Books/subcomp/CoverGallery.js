import React from 'react';
import CoversItem from './CoversItem';

const CoverGallery = ({ books, activeID, onBookSelect }) => (
  <div className='book-covers'>
    {books.map((book) => (
      <CoversItem
        key={book.id}
        book={book}
        isActive={activeID === book.id}
        onItemSelect={() => onBookSelect(book)}
      />
    ))}
  </div>
);

export default CoverGallery;
