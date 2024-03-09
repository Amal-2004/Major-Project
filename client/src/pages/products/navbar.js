import { AppBar, Toolbar, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./product.css"
import React from 'react'

const Navbar=(props)=> {
  console.log(props);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <ArrowBackIcon id="back" />
          <Typography variant='h6' gutterBottom id="title">R&R POWER TOOLS</Typography>
          <Typography variant='h5' gutterBottom id="upload-head">{props.value}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
