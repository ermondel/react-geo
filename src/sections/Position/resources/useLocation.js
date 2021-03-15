import { useState, useEffect } from 'react';
import { isChrome } from '@lib/browser';

export default () => {
  const [coords, setCoords] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isChrome) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => setCoords(position.coords),
        (err) => setErrorMessage(err.message)
      );
    } else {
      setErrorMessage('disabled');
    }
  }, []);

  return [coords, errorMessage];
};
