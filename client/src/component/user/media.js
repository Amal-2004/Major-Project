import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140,}}
        image="https://www.flowerglossary.com/wp-content/uploads/2017/09/types-of-flowers-names-1024x741.jpg"
        title="green iguana"
      />
      
    </Card>
  );
}
