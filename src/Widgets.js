import React from 'react'
import "./widgets.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed"

function Widgets() {
  return (
    <div className='widgets'>
     <div className='widgets-input'>
      <SearchOutlinedIcon className="widgets-searchIcon"/>
      <input placeholder='Search Twitter' type={"text"}/>

     </div>
     <div className='widgets-container'>
       <h2>What's happening</h2>
       <div className='widget-inside'>
       <TwitterTweetEmbed tweetId={"858551177860055040"} />
       <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
        </div>
     </div>

    </div>
  );
}

export default Widgets