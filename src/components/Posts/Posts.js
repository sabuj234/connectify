import React from 'react';
import { PostsData } from '../../Data/PostData';
import Post from '../Post/Post';

const Posts = () => {
  return (
    <div className='posts'>
      {PostsData.map((post,id)=>{
          return <Post data={post} id={id}/>
      })}
    </div>
  )
}

export default Posts