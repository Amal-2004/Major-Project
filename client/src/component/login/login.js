import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../login/login.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { TextField, Button, Typography,IconButton,InputAdornment } from '@mui/material';
 
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Swal.fire('Error!', 'All fields are required', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire('Error!', 'Invalid email format', 'error');
      return;
    }

    if (password.length < 8) {
      Swal.fire('Error!', 'Password must be at least 8 characters long', 'error');
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      Swal.fire('Success!', 'Login successful!', 'success');
      setEmail('')
      setPassword('')
      // Optionally, you can redirect the user to another page upon successful login
      window.location.href = '/dashboard';
    } catch (error) {
      Swal.fire('Error!', error.message || 'Something went wrong!', 'error');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div id='login-body'>
      <div className='login'>
        <Typography variant="h4" id="head" gutterBottom>
          Login
        </Typography>

        <TextField
          id="email"
          autoComplete='off'
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="password"
          autoComplete='off'
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="center">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button id='button' variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>

        <Typography variant="body2" style={{ marginTop: '10px' }}>
          <Link id="forget-link" to='/forgetpassword' style={{ cursor: 'pointer', color: '#1976D2' }}>
            Forgot Password?
          </Link>
        </Typography>

        <Typography id="signup" variant="body2" style={{ marginTop: '10px', color: "black" }}>
          Don't have an account?{' '}
          <Link id="siup" to='/signup' style={{ textDecoration: 'none', color: '#1976D2' }}>
            Sign Up
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default LoginForm;
