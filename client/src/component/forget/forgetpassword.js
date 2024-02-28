import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'; // Import Axios
import '../forget/forget.css';
import { Button, TextField, Typography } from '@mui/material';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!email) {
      Swal.fire('Error!', 'Fill the Email field', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire('Error!', 'Invalid email format', 'error');
      return;
    }

    try {
      const response = await axios.post('/api/reset-password', { email });

      if(!response.status===200){
        
      }
      setMessage(`Password reset link sent to ${email}`);
      setEmail('');
      window.location.href = '/otp';
    } catch (error) {
      Swal.fire('Error!', 'Failed to submit form', 'error');
    }
  };

  return (
    <div id='forget-body'>
      <div id='forget'>
        <Typography id="title" variant="h6" gutterBottom>
          Enter your email to get OTP
        </Typography>

        <TextField
          variant="outlined"
          required
          autoComplete="off"
          id="email"
          label="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>

        {message && (
          <Typography variant="body1" align="center">
            {message}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
