import React from 'react'
import "./landing.css"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SignupOpts from './SignupOpts';
import { useState } from 'react';




function Landing() {
    const navigate=useNavigate();
    return (
      <div className='landing'>
          <div className='landing-img'>
              
          </div>
        <SignupOpts/>
        </div>
        
    )
  
  
  
  }

        
    
  
export default Landing