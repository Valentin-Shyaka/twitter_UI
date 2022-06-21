import React from 'react'
import "./feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import { useState,useEffect} from 'react'
import db from './db'
import { collection, getDocs } from 'firebase/firestore/lite';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Feed() {
  const [posts,setPosts]= useState([])
  
  useEffect(() => {
    // db.collection('posts').onSnapshot((snapshot) =>(
    //   setPosts(snapshot.docs.map(doc => doc.data()))
    // ))
     function getPosts(db) {
      const postsCol = collection(db, 'posts');
      const postsSnapshot = getDocs(postsCol);
     // const postsList = postsSnapshot.docs.map(doc => doc.data());
      setPosts(postsSnapshot.docs.map(doc => doc.data())) ;
    }
     //getPosts(db);
  }, [])
  return (
    <div className='feed'>
        {/* header */}
        <div className='feed_header'>
          <h2>Home</h2>
          <AutoAwesomeOutlinedIcon className='feed-header-icon'/>
        </div>
        <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
        <TweetBox/>
        
        
       {posts.map(post =>(
          <Post displayName={post.displayName} username={post.username} text={post.text} verified={post.verified} avatar={post.avatar} image={post.image} />
        ))} 
        
        
        
        
        <Post displayName={"Lantern"} username={"v_king"} text={"Look at this bart simpson classic 'Steady rocking in the midnight train to Zion.'"} verified={true} avatar={"me4.jpg"} image={"bart.jpg"} bio={"Hey I'm new on Twitter"}/>
        <Post displayName={"Foden"} username={"phil_foden"} text={"The atmosphere at the Etihad on the last match of the season was absolutely incredible. @city #etihad "} verified={true} avatar={"foden 3.jpg"} image={"etihad.jpg"} bio={"Footballer for @ManCity @nikeuk athlete and @easportsfifa ambassador."} />
        <Post displayName={"Lantern"} username={"v_king"} text={"It's Bart Simpson again huh !! 😁😁😁 "} verified={true} avatar={"me4.jpg"} image={"bart.jpg"} />
        <Post displayName={"Umutoni_💘"} username={"mireille"} text={"Sometimes all you need to do is to keep calm and eat just a banana."} verified={true} avatar={"her.jpg"} image={"mood.jpg"} bio={"#Rwandan @programmer🔥God’s daughter🙏"} />
        <Post displayName={"BR_Football"} username={"B_R"} text={"This is how Zinchenko lifted up the premier league trophy and sobbing for his country UKRAINE @Zin11 @ukrvsrus 💛💙"} verified={true} avatar={"br.jpg"} image={"zinchenko.jpg"} bio={"Become a B/R Insider and help shape the future of the app 👇"}/>
        <Post displayName={"Man City"} username={"city"} text={"And GUNDOGGAAAAAAAAAAN he's just inceredible 🏆, what a player 🏅, he save City again 🔵⚪ "} verified={true} avatar={"city.jpg"} image={"gundogan.jpg"} bio={"𝐸𝓈𝓉. 1894 💙 This Is Our City 🏆 8 x League Champions 🙌 #ManCity ℹ️ @ManCityHelp"} />
        <Post displayName={"Premier League"} username={"P_L"} text={"Ladies and Gentlemen we present your Premier League 2021/2022 Champions: Manchester City !!!"} verified={true} avatar={"pl.png"} image={"champions2.jpg"} bio={"The official Twitter account of the Premier League 📱 @OfficialFPL 🇮🇳 @PLforIndia 🇺🇸 @PLinUSA Join us on YouTube http://youtube.com/premierleague"} />
        <Post displayName={"AL_Qazi"} username={"cleverprogramer"} text={"yooo i can't believe i did this the official youtube clone with major functionalities."} verified={true} avatar={"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"} image={"image (1).png"} /> 
       
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}

    </div>
  )
}

export default Feed