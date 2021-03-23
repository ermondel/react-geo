import { useState, useEffect } from 'react';

export default (dispatchCoordinates) => {
  const [coords, setCoords] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!!window.chrome) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          const nextCoords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          };

          setCoords(nextCoords);
          dispatchCoordinates(nextCoords);
        },
        (err) => setErrorMessage(err.message)
      );
    } else {
      setErrorMessage('disabled');
    }
  }, [dispatchCoordinates]);

  return [coords, errorMessage];
};
