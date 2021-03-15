import React from 'react';
import BrowserWarning from '../subcomp/BrowserWarning';
import PositionRequest from '../subcomp/PositionRequest';
import RequestError from '../subcomp/RequestError';
import CompassImage from '../subcomp/CompassImage';
import { isChrome } from '@lib/browser';

const PositionContent = ({ wait, error }) => {
  let content;

  if (!isChrome) {
    content = <BrowserWarning />;
  } else if (wait) {
    content = <PositionRequest />;
  } else if (error) {
    content = <RequestError message={error} />;
  } else {
    content = <CompassImage />;
  }

  return (
    <main className='main'>
      <div className='accept-card'>
        <div className='accept-card__inner'>{content}</div>
      </div>
    </main>
  );
};

export default PositionContent;
