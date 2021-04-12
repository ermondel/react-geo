import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ post, onRemoveClick }) => (
  <article className='pst-list__item'>
    <div className='pst-list__content'>
      <h3 className='pst-list__title'>
        <Link to={'/posts/' + post.id}>{post.title}</Link>
      </h3>
      <p className='pst-list__categories'>{post.categories}</p>
    </div>
    <div className='pst-list__btns'>
      <button className='pst-list__btn-remove' onClick={onRemoveClick}>
        Remove
      </button>
    </div>
  </article>
);

export default PostListItem;
