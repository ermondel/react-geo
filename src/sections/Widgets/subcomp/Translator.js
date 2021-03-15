import React, { useState, useEffect } from 'react';
import { nodeapiserver } from '@lib/api';
import { ErrorRemote } from '@subcomponents/UtilImages';

const LoadingData = () => <div className='translator-loading'>Translating...</div>;

const ErrorMessage = () => (
  <div className='translator-error'>
    <ErrorRemote />
    <div>
      The remote server is not responding
      <br />
      Perhaps it is overloaded with requests
      <br />
      Please come back later
    </div>
  </div>
);

const TranslationResult = (props) => (
  <div className='translator__result'>{props.value || '\u00A0'}</div>
);

const Translator = ({ word, language, source }) => {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('default');
  const [query, setQuery] = useState(word);

  useEffect(() => {
    let timeoutID = null;

    if (word) {
      timeoutID = setTimeout(() => setQuery(word), 1000);
    } else {
      setResult('');
      setQuery('');
    }

    return () => clearTimeout(timeoutID);
  }, [word]);

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await nodeapiserver.get('/request/googletranslate', {
          params: {
            q: query,
            source: source,
            target: language,
            format: 'text',
          },
        });

        setResult(response.data.data.translations[0].translatedText);
        setStatus('default');
      } catch (error) {
        setStatus('error');
      }
    };

    if (query && language && source) {
      getResult();
      setStatus('loading');
    }
  }, [query, language, source]);

  return (
    <div className='translator'>
      {status === 'loading' && <LoadingData />}
      {status === 'error' && <ErrorMessage />}
      {status === 'default' && <TranslationResult value={result} />}
    </div>
  );
};

export default Translator;
