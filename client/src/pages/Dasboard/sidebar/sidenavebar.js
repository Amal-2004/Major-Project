import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import {
  GridView as GridViewIcon,
  Folder as FolderIcon,
  Assignment as AssignmentIcon,
  Save as SaveIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import './navebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    { path: '/', name: 'Dashboard', icon: <GridViewIcon /> },
    { path: '/filemanage', name: 'File', icon: <FolderIcon /> },
    { path: '/order', name: 'Order', icon: <AssignmentIcon /> },
    { path: '/save', name: 'Save', icon: <SaveIcon /> },
    { path: '/setting', name: 'Setting', icon: <SettingsIcon /> },
    { path: '/User', name: 'User', icon: <AccountCircleIcon /> }
  ];

  return (
    <div className='side-body'>
      <motion.div animate={{ width: isOpen ? '200px' : '80px' }} className='sidebar'>
        <div className='side-menu'>
          {isOpen && <Typography variant='h5' gutterBottom>Dashboard</Typography>}
          <div id='menu'>
            <MenuIcon onClick={toggleSidebar} style={{marginRight:'10px'}}/>
          </div>
        </div>
        <section className='side-icon'>
          {routes.map(route => (
            <NavLink to={route.path} key={route.name} className='link'>
              <div>{route.icon}</div>
              {isOpen && <div>{route.name}</div>}
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
