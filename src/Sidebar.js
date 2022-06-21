import React from 'react'
import "./sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Sidebar() {
  function darkMode(){
    const app = document.getElementById("root");
    app.classList.toggle("dark-theme")
    document.body.classList.toggle("dark-theme");

}
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar_twitterIcon'/>
        <SidebarOption  active Icon={HomeIcon} text={"Home"} badge={6}/>
        <SidebarOption Icon={SearchIcon} text={"Explore"}/>
        <SidebarOption Icon={NotificationsNoneIcon} text={"Notifications"}/>
        <SidebarOption Icon={MailOutlineIcon} text={"Messages"} badge={4}/>
        <SidebarOption Icon={BookmarkBorderIcon} text={"Bookmarks"}/>
        <SidebarOption Icon={ListAltIcon} text={"Lists"}/>
        <SidebarOption Icon={PermIdentityIcon} text={"Profile"} badge={1}/>
        <SidebarOption Icon={MoreHorizIcon} text={"More"}/>
        
        <Button className='sidebar-btn' >Tweet</Button>

       <Button className='sidebar-dark-btn' onClick={()=>darkMode()} ><DarkModeIcon/></Button> 
    </div>
  )
}

export default Sidebar