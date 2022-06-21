import React from 'react'
import Sidebar from "./Sidebar"
import Widgets from "./Widgets"
import Feed from "./Feed"

function Home() {
  return (
    <div className="app">
    <Sidebar/>
    <Feed />
    <Widgets/>
    
    
     
    </div>
  )
}

export default Home