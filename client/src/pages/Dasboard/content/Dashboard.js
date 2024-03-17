import React from 'react'
import './css/dashboard.css'
import Sidebar from '../sidebar/sidenavebar'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard