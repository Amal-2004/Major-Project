import * as React from 'react';


import { Typography } from '@mui/material';
export default function BasicMenu(){

  return (
    <div>
      
      <Typography sx={{color:'#ffdab9', fontSize: '25px',fontWeight:'Bold',fontFamily:'Rockwell'}}
      >R&R 
      </Typography>
      <Typography sx={{ marginTop: '-30px', marginLeft: '60px', fontWeight: 'bold', width: '120px'}}>Power Tools </Typography> 
    
    </div>
  );
}