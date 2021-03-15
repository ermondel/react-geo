import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { ModalWindow, modalClose } from '@modal/ModalWindow';

const CityLocation = ({ visible, city, modalClose }) => {
  const mapEl = useRef(null);
  const mapElStyle = { width: '600px', height: '600px' };

  if (visible && window.google && window.google.maps) {
    new window.google.maps.Map(mapEl.current, {
      zoom: 12,
      center: {
        lat: city.coord.lat,
        lng: city.coord.lon,
      },
    });
  }

  const onClose = () => modalClose();

  return (
    <ModalWindow visible={visible} onClose={onClose}>
      <div className='citylocation' style={mapElStyle} ref={mapEl} />
      <div className='modal-citylocation__control'>
        <button
          className='modal-citylocation__btn-close'
          onClick={onClose}
          title='Close window'
        >
          Close
        </button>
      </div>
    </ModalWindow>
  );
};

const mapStateToProps = (state) => ({
  visible: state.modalWindow,
  city: state.forecastCity,
});

export default connect(mapStateToProps, { modalClose })(CityLocation);
