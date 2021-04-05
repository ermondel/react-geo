import React from 'react';

const ForecastItemHeader = (props) => (
  <div className='forecast__header'>
    <h3 className='forecast__title'>{props.cityName}</h3>
    <div className='forecast__btns'>
      {props.btnMap ? (
        <button className='forecast__btn-map' onClick={props.onCityMapClick}>
          Show on the map
        </button>
      ) : null}
      <button className='forecast__btn-info' onClick={props.onCityInfoClick}>
        Get info about the city
      </button>
      <button className='forecast__btn-delete' onClick={props.onCityRemoveClick}>
        Remove from the list
      </button>
    </div>
  </div>
);

export default ForecastItemHeader;
