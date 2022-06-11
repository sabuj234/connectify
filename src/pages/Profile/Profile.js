import React from 'react';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft.js';
import './Profile.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.js';
import PostSide from '../../components/PostSide/PostSide.js';
import RightSide from '../../components/RightSide/RightSide.js';

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileLeft/>
      <div className='profile-center'>
          <ProfileCard/>
          <PostSide/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
