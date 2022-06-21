import { Verified } from '@mui/icons-material'
import React from 'react'
import "./Post.css"
import UserCard from './UserCard'
import {Avatar} from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar,
    followAvatar,
    follower,
    bio
    
    }) {
    
  return (
    <div className='post'>
        <div className='post-avatar'>
            <Avatar src={avatar}/>
            <UserCard avatar={avatar} displayName={displayName} username={username} followAvatar={'fab.jpg'} follower={"Dushime Fab"} bio={bio}/>

        </div>
        <div className='post-body'>
           <div className='post-header'>
               <div className='post-headerText'>
                <h3>
                 {displayName} {""} <span>
                     {verified && <VerifiedIcon className='post-badge'/>}
                 </span>
                 <span className='post-header-special'> @{username}</span>
                </h3>
               </div>
               <div className='post-header-desc'>
                   <p>{text} </p> 
               </div>


           </div>
           <img src={image} alt='post'/>
           <div className='post-footer'>
                <ChatBubbleOutlineRoundedIcon fontSize='small' className='footer-icon'/>
                <RepeatRoundedIcon fontSize='small' className='footer-icon'/>
                <FavoriteBorderIcon fontSize='small' className='footer-icon'/>
                <FileUploadOutlinedIcon fontSize='small' className='footer-icon'/>
           </div>
        </div>

    </div>
  )
}

export default Post
