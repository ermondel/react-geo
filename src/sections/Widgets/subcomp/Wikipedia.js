import React, { useState, useEffect } from 'react';
import { wikipedia } from '@lib/api';
import { SpinnerBig, ErrorRemote } from '@subcomponents/UtilImages';
import WikiArticle from './WikiArticle';

const LoadingData = () => (
  <div className='wiki-spinner'>
    <SpinnerBig />
  </div>
);

const ErrorMessage = () => (
  <div className='wiki-error'>
    <ErrorRemote />
    <div>
      <p>The remote server is not responding</p>
      <p>Perhaps it is overloaded with requests</p>
      <p>Please come back later</p>
    </div>
  </div>
);

const WikiArticles = ({ list }) => {
  return list.map((page) => <WikiArticle page={page} key={page.pageid} />);
};

const Wiki = () => {
  const [term, setTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('default');

  useEffect(() => {
    const search = async () => {
      try {
        const response = await wikipedia.get('/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term,
          },
        });

        setArticles(response.data.query.search);
        setStatus('default');
      } catch (error) {
        setStatus('error');
      }
    };

    const timeoutID = setTimeout(() => {
      if (term) {
        search();
        setStatus('loading');
      }
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, [term]);

  return (
    <div className='wiki-widget'>
      <div className='wiki-search'>
        <input
          type='text'
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          className='wiki-search__input'
          placeholder='Search Wikipedia'
          name='search'
        />
      </div>

      <div className='wiki-articles'>
        {status === 'loading' && <LoadingData />}
        {status === 'error' && <ErrorMessage />}
        {status === 'default' && <WikiArticles list={articles} />}
      </div>
    </div>
  );
};

export default Wiki;
