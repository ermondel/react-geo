import { useState, useEffect } from 'react';

export default () => {
  const [coords, setCoords] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setCoords(position.coords),
      (err) => setErrorMessage(err.message)
    );
  }, []);

  return [coords, errorMessage];
};
