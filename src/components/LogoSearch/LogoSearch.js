import React from 'react'
import Logo from '../../img/Myproject.png';
import {UilSearch} from '@iconscout/react-unicons';
import './LogoSearch.css';

const LogoSearch = () => {
  return (
    <div className='logosearch'>
      <img src={Logo} alt='' />
      <div className='search'>
          <input type='text' placeholder='#Explore' />
          <div className='s-icon'>
              <UilSearch/>
          </div>
      </div>
    </div>
  )
}

export default LogoSearch
