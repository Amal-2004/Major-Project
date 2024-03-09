
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Filemanage from './Filemanage'
import Order from './Order'
import Save from './Save'
import Setting from './Setting'
import User from './User'  
import Sidebar from '../sidebar/sidenavebar' 
function Dasmain() {
  return (
    <div>
      <Sidebar>
       <Routes>
        <Route path='/Dashboard' Component={Dashboard}/>
        <Route path='/Filemanage' Component={Filemanage}/>
        <Route path='/Order' Component={Order}/>
        <Route path='/Save' Component={Save}/>
        <Route path='/Setting' Component={Setting}/>
        <Route path='/User' Component={User}/>
      </Routes>  
      </Sidebar> 
      
    </div>
  )
}

export default Dasmain
