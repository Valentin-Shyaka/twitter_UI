import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function SignupOpts() {
    //const [status,setStatus]=useState(false)
    const navigate=useNavigate();
    function next(){
        navigate("/signup")
        //setStatus(true)
    }
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    }
  return (
    
    <div className='main'>
            <h2>Happening now !!</h2>
            <h3>Join twitter today.</h3>

            <Button className='main-input' onClick={()=>{
              setTimeout(() => {
                next()
              }, 3000);
              handleToggle()
            }}>
                Sign up with Google
            </Button>
            <Button className='main-input'>
                Sign up with phone or email
            </Button>

            <p>By signing up you agree to the  <span>Terms of Service</span> and <span>Privacy Policy</span> including <span>Cookie Use.</span></p>
             
             <h4>Already have an acoount? <span>Log in</span></h4>
             <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
              >
                <CircularProgress color="inherit" />
             </Backdrop>
        
       </div>
    
    
  )
}

export default SignupOpts