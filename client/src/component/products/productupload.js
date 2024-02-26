import React from 'react';
import './product.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box, Button, Card, CardActions, CardContent, TextField } from '@mui/material';
import Navbar from './navbar';

function Productupload() {
  return (
    <>
      <Navbar />
      <div className='box'>
        <Box width='1200px'  >
          <Card id="card" className='card' >
            <CardContent>
              
              <div className='product-con'>
              <Button className='member' id="upload-img"
              variant='contained'
              color='primary'
              startIcon={<UploadFileIcon/>}
              >Upload Image
              </Button>
              <TextField className='member' id='pr-name' autoComplete='off' label='Product Name' />
              <TextField className='member' id='pr-model' autoComplete='off' label='Product Model' />
              <TextField className='member' id='pr-price' autoComplete='off' label='Product Price' type='number' />
              <TextField className='member' id='pr-desc' autoComplete='off' label='Product Description' multiline maxRows={5} />
              <Button variant='contained' color='primary' id="upload">Upload</Button>
              </div>
              
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Box>
      </div>
    </>
  );
}
export default Productupload;