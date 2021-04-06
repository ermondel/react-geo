import React from 'react';
import Dashboard from '../subcomp/Dashboard';
import ModalRemovePost from '../subcomp/ModalRemovePost';

const PostsContent = () => (
  <main className='main'>
    <Dashboard />
    <ModalRemovePost />
  </main>
);

export default PostsContent;
