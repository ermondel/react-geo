import React from 'react';
import { stripHTMLTags } from '@lib/strip';

const WikiArticle = ({ page }) => (
  <article className='wiki-article'>
    <h3 className='wiki-article__title'>
      <a
        href={'https://en.wikipedia.org?curid=' + page.pageid}
        target='_blank'
        rel='noopener noreferrer'
        className='wiki-article__link'
      >
        {page.title}
      </a>
    </h3>
    <p
      dangerouslySetInnerHTML={{ __html: stripHTMLTags(page.snippet) + ' ...' }}
      className='wiki-article__content'
    ></p>
  </article>
);

export default WikiArticle;
