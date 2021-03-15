import React from 'react';

const InfoBlockItemList = ({ data }) => {
  let itemList = [];

  for (let key in data) {
    itemList.push(
      <p className='infoblock__item' key={key}>
        <span className='infoblock__key'>{key}</span>&nbsp;
        <span className='infoblock__value'>{data[key]}</span>
      </p>
    );
  }

  if (!itemList.length) {
    return null;
  }

  return <div className='infoblock__items'>{itemList}</div>;
};

const InfoBlockControl = ({ show = false, onClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div className='infoblock__control'>
      <button onClick={onClick} className='infoblock__btn-close' title='Close block'>
        Close
      </button>
    </div>
  );
};

const InfoBlock = ({ title, data, buttons = null, showControlBtns = false, onClose }) => {
  return (
    <div className='infoblock'>
      <h3 className='infoblock__title'>{title}</h3>
      <InfoBlockItemList data={data} />
      {buttons}
      <InfoBlockControl show={showControlBtns} onClick={onClose} />
    </div>
  );
};

export default InfoBlock;
