import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the logic to send a reset password link to the provided email address
    // For demonstration purposes, let's just display a message
    setMessage(`Password reset link sent to ${email}`);
    setEmail(''); // Clear email field after submission
  };

  return (

    <form onSubmit={handleSubmit}>

      <Typography variant="h5" align="center" gutterBottom>
        Forgot Your Password?
      </Typography>

      <TextField
        variant="outlined"
        required
        autoComplete="off"
        id="email"
        label="Email Address"
        name="email"
        value={email}
        onChange={handleEmailChange} />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

      <Link id="" to='/' style={{ cursor: 'pointer', color: '#1976D2' }}>
        Back to Login
      </Link>

      {message && (

        <Typography variant="body1" align="center">
          {message}
        </Typography>

      )}

    </form>

  );
};

export default ForgetPassword;
