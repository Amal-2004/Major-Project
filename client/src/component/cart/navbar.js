import { AppBar, Toolbar, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./cart.css"
import React from 'react'
function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <ArrowBackIcon id="back" />
          <Typography variant='h6' gutterBottom id="title">R&R POWER TOOLS</Typography>
          <Typography variant='h5' gutterBottom id="head">Cart</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Navbar
