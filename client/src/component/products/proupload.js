import React, { useRef } from 'react';
import './product.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box, Button, Card, CardActions, CardContent, TextField } from '@mui/material';
import Navbar from './nanbar';


function Productupload() {
  const upload = useRef()

  const action = () => upload.current.click()
  return (
    <>
      <Navbar />
      <div className='box'>
        <Box width='1200px'  >
          <Card style={{ height: '450px' }} >
            <CardContent>
              <UploadFileIcon onClick={action} />
              <input type='file' ref={upload} style={{ display: 'none' }} />
              <TextField id='pr-name' autoComplete='off' label='Product Name' />
              <TextField id='pr-model' autoComplete='off' label='Product Model' />
              <TextField id='pr-price' autoComplete='off' label='Product Price' type='number' />
              <TextField id='pr-disc' autoComplete='off' label='Product Discription' multiline maxRows={6} />
            </CardContent>
            <CardActions>
              <Button variant='contained' color='primary'>Upload</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    </>

  );
}

export default Productupload;