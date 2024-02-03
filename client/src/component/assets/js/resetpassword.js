import { TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function Resetpassword() {
  const [password,setPassword]=useState()
  const [resetpassword,setResetpassword]=useState()
  return (
    <div>
        <div>
            <Typography variant='h5'>Reset your Password</Typography>
            <TextField 
            id=''
            label='New Password'
            variant='outlined'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>

            <TextField 
            id=''
            label='Reset Password'
            variant='outlined'
            type='password'
            value={resetpassword}
            onChange={(e)=>setResetpassword(e.target.value)}
            />
        </div>
    </div>
  )
}
export default Resetpassword