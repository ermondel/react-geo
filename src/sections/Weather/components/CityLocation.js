import React, { useRef } from 'react';
import { connect } from 'react-redux';
import ModalWindow from '../../../app/ModalWindow/components/ModalWindow';
import { modalClose } from '../../../app/ModalWindow/actions/ModalWindow';

const CityLocation = ({ visible, city, modalClose }) => {
  const mapEl = useRef(null);
  const mapElStyle = { width: '600px', height: '600px' };

  if (visible) {
    new window.google.maps.Map(mapEl.current, {
      zoom: 12,
      center: {
        lat: city.coord.lat,
        lng: city.coord.lon,
      },
    });
  }

  return (
    <ModalWindow visible={visible} onWindowClose={() => modalClose()}>
      <div style={mapElStyle} ref={mapEl} />
    </ModalWindow>
  );
};

const mapStateToProps = (state) => ({
  visible: state.modalWindow,
  city: state.forecastCity,
});

export default connect(mapStateToProps, { modalClose })(CityLocation);