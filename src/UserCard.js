import React from 'react'
import "./usercard.css"
import { Avatar,Button } from '@mui/material'

function UserCard({avatar,username,displayName,followAvatar,follower,bio}) {
  return (
    <div className='usercard'>
        <div className='usercard-header'>
        <Avatar src={avatar} className="usercard-header-avatar"/>
        <Button className='usercard-header-btn'>Follow</Button>

        </div>
        <h3>{displayName}</h3>
        <span>@{username}</span>
        <p>{bio}</p>
        <div className='visibility-status'>
            <p><span>97</span> following</p>
            <p><span>1M</span> followers</p>

        </div>
        <div className='footer'>
            <Avatar src={followAvatar} className="footer-avatar"/>
            <p>Followed by @{follower}</p>

        </div>

    </div>
  )
}

export default UserCard