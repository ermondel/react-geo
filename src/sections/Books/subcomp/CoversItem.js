import React from 'react';

const spansBuffer = {};

const CoversItem = ({ book, isActive, onItemSelect }) => {
  const onLoad = (event) => {
    if (!spansBuffer[book.id]) {
      const spans = Math.ceil(event.target.clientHeight / 10);
      spansBuffer[book.id] = spans;
      event.target.parentNode.style = 'grid-row-end: span ' + spans;
    }
  };

  const cellClassName = !isActive ? 'book-covers__cell' : 'book-covers__cell--active';

  const btnClassName = !isActive
    ? 'book-covers__btn-about'
    : 'book-covers__btn-about--active';

  const altText = 'The cover of ' + book.title;

  const inlineStyle = {};

  if (spansBuffer[book.id]) {
    inlineStyle['gridRowEnd'] = `span ${spansBuffer[book.id]}`;
  }

  return (
    <div className='book-covers__item' style={inlineStyle}>
      <img src={book.image} alt={altText} className='book-covers__img' onLoad={onLoad} />
      <div className={cellClassName}>
        <button className={btnClassName} disabled={isActive} onClick={onItemSelect}>
          About
        </button>
      </div>
    </div>
  );
};

export default CoversItem;
