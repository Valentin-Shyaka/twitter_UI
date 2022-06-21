import React from 'react'
import { Badge } from '@mui/material'


function SidebarOption({ badge,active , text, Icon}) {
  
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active" }`}>
      <Badge badgeContent={badge} color="primary">
        <Icon/>
        </Badge>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption