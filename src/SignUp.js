import React from 'react'
import "./signup.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function SignUp() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function darkMode(){
    const app = document.getElementById("root");
    app.classList.toggle("dark-theme")
    document.body.classList.toggle("dark-theme");
    setColor("success")

}
const navigate= useNavigate()
  const [color,setColor]=useState('secondary')
  const [month, setMonth] = React.useState('January');
  const [day, setDay] = React.useState('day 1');
  const [year, setYear] = React.useState('2000');


  const handleMonth = (event) => {
    setMonth(event.target.value);
    
   
    

  };
  const handleDay= (event)=>{
    setDay(event.target.value);
  }
  const handleYear = (event) =>{
    setYear(event.target.value);
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  
  const months = [
    {
      value: 'USD',
      label: 'January',
    },
    {
      value: 'EUR',
      label: 'February',
    },
    
    {
      value: 'JPY',
      label: 'April',
    },
    {
      value: 'JPY',
      label: 'May',
    },
    {
      value: 'JPY',
      label: 'March',
    },
    {
      value: 'JPY',
      label: 'June',
    },
    {
      value: 'JPY',
      label: 'July',
    },
    {
      value: 'JPY',
      label: 'August',
    },
    {
      value: 'JPY',
      label: 'September',
    },
    {
      value: 'JPY',
      label: 'October',
    },
    {
      value: 'JPY',
      label: 'November',
    },
    {
      value: 'BTC',
      label: 'December',
    },
  ];
  const days=[{value: 'JPY',label:"day 1"},{value: 'JPY',label:"day 2"},{value: 'JPY',label: "day 3"},{value: 'JPY',label: "day 4"},{value: 'JPY',label: "day 5"},{value: 'JPY',label:"day 6"},{value: 'JPY',label: "day 7"},{value: 'JPY',label:"day 8"},{value: 'JPY',label: "day 9"},{value: 'JPY',label: "day 10"},{value: 'JPY',label:"day 11"},{value: 'JPY',label:"day 12"},{value: 'JPY',label:"day 13"},{value: 'JPY',label:"day 14"},{value: 'JPY',label:"day 15"},{value: 'JPY',label:"day 16"},{value: 'JPY',label:"day 17"},{value: 'JPY',label:"day 18"},{value: 'JPY',label:"day 19"},{value: 'JPY',label:"day 20"},{value: 'JPY',label:"day 21"},{value: 'JPY',label:"day 22"},{value: 'JPY',label:"day 23"},{value: 'JPY',label:"day 24"},{value: 'JPY',label:"day 25"},{value: 'JPY',label:"day 26"},{value: 'JPY',label:"day 27"},{value: 'JPY',label:"day 28"},{value: 'JPY',label:"day 29"},{value: 'JPY',label:"day 30"},{value: 'JPY',label:"day 31"}]
  const years=[{value: 'JPY',label:"2000"},{value: 'JPY',label:"2001"},{value: 'JPY',label:"2002"},{value: 'JPY',label:"2003"},{value: 'JPY',label:"2004"},{value: 'JPY',label:"2005"},{value: 'JPY',label:"2006"},{value: 'JPY',label:"2007"},{value: 'JPY',label:"2008"},{value: 'JPY',label:"2009"},{value: 'JPY',label:"2010"}]
  function changeColor(){
    setColor("success")


  }
  return (
    <div className='signup'>
    <div className='main2'>
      <div className='headers'>
      {/* <Button className='sidebar-dark-btn' onClick={()=>darkMode()} ><DarkModeIcon/></Button>  */}
      <FormControlLabel  control={<Switch />} onClick={()=>{darkMode()}} className="signup-dark-btn"/>
      <TwitterIcon className='signup-twitter-icon'/>
      <Button className='signup-header-btn'>Next <ArrowRightAltIcon/> </Button>
      </div>
      <h2>Create your account</h2>
      <TextField fullWidth  margin='normal' color={color} id="input" label="Name" onClick={changeColor} variant="filled" className="input"/>
      <TextField fullWidth  margin='normal' color={color} id="input" label="Phone" onClick={changeColor} variant="filled" className="input"/>

      <span>Use Email instead </span>

      <h3>Date of birth</h3>

      <p>This will not be shown publicly,confirm your own age, even if this account is for business, a pet, or something else</p>
       <div className='select'>
         <div className='indiv'>
      <TextField className='filled-select-currency'
          id="filled-select-currency"
          select
          label="Month"
          value={month}
          onChange={handleMonth}
          //helperText="Please select your currency"
          variant="standard"
          color={color}
        >
          {months.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className='indiv'>
        <TextField className='filled-select-currency'
          id="filled-select-currency"
          select
          label="Date"
          value={day}
          onChange={handleDay}
          //helperText="Please select your currency"
          variant="standard"
          color={color}
          
        >
          {days.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className='indiv'>
        <TextField className='filled-select-currency'
          id="filled-select-currency"
          select
          label="year"
          value={year}
          onChange={handleYear}
          //helperText="Please select your currency"
          variant="standard"
          color={color}
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

        </div>
        <Button className='signup-btn' onClick={()=>{
         setTimeout(()=>{
          navigate('/home');
         },3000) 
         handleClick()
         
          }}>Sign up</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="User signed up"
        action={action}
      />

      
      
        

    </div>
    </div>
  )
}

export default SignUp