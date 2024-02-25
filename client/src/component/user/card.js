import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import MediaCard from './media';
import { Favorite } from '@mui/icons-material';
import { Button } from '@mui/material';


export default function ActionAreaCard() {
  return (
    <Card
     sx={{
      paddingLeft: '20px',
      width: '340px',
      height: '300px',
      flexDirection: 'row',
      float: 'left',
      paddingBottom: '50px',
      marginLeft: '60px',
     marginTop: '95px',
     background: 'white',
     boxShadow: '0 0 20px #4b4b4b',
      display: 'flex',
      paddingRight: '-20px'
      
     }}
    
   
 >
        <CardContent>
       <MediaCard />
          <Typography gutterBottom variant="h5" sx={{marginLeft: '60px', marginTop: '20px'}}>
            boat
          </Typography>
          <Typography
          sx={{marginLeft: '110px',marginBottom: '20px'}}
          >
           Product Name <br></br>
           Amount 
           </Typography>
             <Button variant='contained' sx={{marginBottom: '95px', marginLeft: '100px'}}>
              add to cart
             </Button>
             
         <Favorite sx={{marginLeft: '20px',marginBottom: '40px',cursor: 'pointer'}} />
         
        </CardContent>
         </Card>
    
  );
}

