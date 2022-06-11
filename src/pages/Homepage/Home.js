import React from 'react'
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import RightSide from '../../components/RightSide/RightSide';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='home'>
          <ProfileSide/>
          <PostSide/>
          <RightSide/>
      </div>
    </div>
  )
}

export default Home
