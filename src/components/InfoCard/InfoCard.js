import React, { useState } from 'react';
import {UilPen} from '@iconscout/react-unicons';
import './InfoCard.css';
import { useNavigate } from 'react-router-dom';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {

    const history= useNavigate();

    const[modalOpen,setModalOpen] = useState(false)

  return (
    <div className='infocard'>
      <div className='infohead'>
          <h4>Your Info</h4>
          <div>

          <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpen(true)}/>
          <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
          </div>
      </div>
      <div className='info'>
          <span>
              <b>
                  Status 
              </b>
          </span>
          <span>
              in Relationship
          </span>
      </div>
      <div className='info'>
          <span>
              <b>
                  Lives in 
              </b>
          </span>
          <span>
              Kolkata
          </span>
      </div>
      <div className='info'>
          <span>
              <b>
                  Works at 
              </b>
          </span>
          <span>
              TCS
          </span>
      </div>
      <button className='button logout-bt' onClick={() => history('/signup') }>Logout</button>
    </div>
  )
}

export default InfoCard
