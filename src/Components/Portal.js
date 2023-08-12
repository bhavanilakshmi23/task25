import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'

function Portal() {
  return (
    <>
 <div id='wrapper'>
    
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <TopBar/>
      <div class="container-fluid">
       <Outlet></Outlet>
        
    </div>
    </div>
 
    </div>
   
    </div>
  </>
  )
}

export default Portal