
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Filemanage from './Filemanage'
import Order from './Order'
import Save from './Save'
import Setting from './Setting'
import User from './User'
import Admin from '../sidebar/sidenavebar' 

function Index() {
  return (
    <div>
        <Admin>
      <Routes>
        <Route path='/Dashboard' Component={Dashboard}/>
        <Route path='/Filemanage' Component={Filemanage}/>
        <Route path='/Order' Component={Order}/>
        <Route path='/Save' Component={Save}/>
        <Route path='/Setting' Component={Setting}/>
        <Route path='/User' Component={User}/>
      </Routes> 
      </Admin>
    </div>
  )
}

export default Index
