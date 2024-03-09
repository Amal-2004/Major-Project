import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function AdminLogin() {
    const [user,setUser]=useState()
    const [password,setPassword]=useState()

    const Login = async()=>{
        if(!user || !password){
            Swal.fire('Error','Fill the fields','error')
            return
        }
        if(password < 8){
            Swal.fire('Error','Password must be at least 8 characters long','error')
            return
        }
    }

  return (
    <div>
      <div>
        <Typography variant='h4' gutterBottom>Admin Login</Typography>

        <TextField
        id=''
        label='User name'
        value={user}
        onChange={(e)=>setUser(e.target.value)}/>

        <TextField
        id=''
        label='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>

        <Button variant='outlined' onClick={Login}>Login</Button>
      </div>
    </div>
  )
}

export default AdminLogin
