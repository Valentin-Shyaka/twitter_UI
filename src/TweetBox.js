import React from 'react'
import "./TweetBox.css"
import {Avatar,Button} from "@mui/material"
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweet-box-input">
                <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'/>
                <input type={"text"} placeholder="What's happening"/>
                

            </div>
            <input type={"text"} placeholder="Optional: Enter Image URL" className='tweet-box-img'/>
            <div className='tweet-box-icons'>
            <PhotoOutlinedIcon className='tweet-box-icon'/>
            <GifBoxOutlinedIcon  className='tweet-box-icon'/>
            <PollOutlinedIcon className='tweet-box-icon'/>
            <SentimentSatisfiedOutlinedIcon className='tweet-box-icon'/>
            <DateRangeOutlinedIcon className='tweet-box-icon'/>
            <AddLocationOutlinedIcon className='tweet-box-icon'/>
            <Button className='tweet-box-btn'>Tweet</Button>
            </div>
            
            {/* <Button className='tweet-box-btn'>Tweet</Button> */}
        </form>
    </div>
  )
}

export default TweetBox