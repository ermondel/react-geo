import React from 'react';
import PostDashboard from '../subcomp/PostDashboard';
import ModalRemovePost from '../subcomp/ModalRemovePost';

const PostsContent = () => (
  <main className='main'>
    <PostDashboard />
    <ModalRemovePost />
  </main>
);

export default PostsContent;
