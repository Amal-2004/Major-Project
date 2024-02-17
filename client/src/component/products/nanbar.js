import { AppBar, Toolbar, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'

function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <ArrowBackIcon />
          
          <Typography variant='h6' gutterBottom >R&R POWER TOOLS</Typography>
          <Typography variant='h5' gutterBottom>Product Upload</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
