import React from 'react';
import { Link } from 'react-router-dom';

const ViewPost = ({ post, onRemoveClick }) => {
  return (
    <article className='view-post'>
      <h3 className='view-post__title'>{post.title}</h3>
      <p className='view-post__categories'>{post.categories}</p>
      <p className='view-post__content'>{post.content}</p>
      <div className='view-post__actions'>
        <Link to={'/posts'} className='view-post__dlink-back'>
          Go back to the list
        </Link>
        <button onClick={onRemoveClick} className='view-post__btn-remove'>
          Remove
        </button>
      </div>
    </article>
  );
};

export default ViewPost;
