import { Favorite, LocalMall, Person, } from '@mui/icons-material'
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import BasicMenu from './Menu'
import SearchAppBar from './search'

const Nav = () => {
  return (
    <AppBar>
      
      <Toolbar>
        <BasicMenu />
        <SearchAppBar />
        
        
        <Favorite sx={{marginLeft: '50px',color: 'white'}} />
      <LocalMall sx={{display: 'flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', cursor: 'pointer'}} 
      
      ></LocalMall>
      <Person
        sx={{marginLeft: '5px',cursor: 'pointer'}}
     ></Person>
     
    </Toolbar>
    
    </AppBar>
    
  )
}

export default Nav