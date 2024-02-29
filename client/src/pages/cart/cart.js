import React, { useState } from 'react';
import Navbar from './navbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './cart.css';

const QuantityControl = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <IconButton onClick={handleDecrement}>
        <RemoveIcon />
      </IconButton>
      <span>{quantity}</span>
      <IconButton onClick={handleIncrement}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

function Cart() {
  const amount = 100;
  const name = 'Angle Grinder';
  const description = 'Description';
  const shipping = 40;
  const total = amount + shipping;

  return (
    <div>
      <Navbar />
      <div className='box'>
        <Box width='1500px'>
          <Card id='card'>
            <CardContent>
              <div className='cont'>
                <div className='products'>
                  <img src='your_image_source_here' alt='Product' />
                  <h2>{name}</h2>
                  <h3>{description}</h3>
                  <h5>Rs: {amount}</h5>
                  <Box display='flex' alignItems='center' id='quantity'>
                    <QuantityControl id="quantity" />
                  </Box>
                  <Button variant='contained' color='error' id='remove' size='large'>
                      Remove
                    </Button>
                </div>
                <div className='products'>
                  <img src='your_image_source_here' alt='Product' />
                  <h2>{name}</h2>
                  <h3>{description}</h3>
                  <h5>Rs: {amount}</h5>
                  <Box display='flex' alignItems='center' id='quantity'>
                    <QuantityControl id="quantity" />
                  </Box>
                  <Button variant='contained' color='error' id='remove' size='large'>
                      Remove
                    </Button>
                </div>
                <div className='products'>
                  <img src='your_image_source_here' alt='Product' />
                  <h2>{name}</h2>
                  <h3>{description}</h3>
                  <h5>Rs: {amount}</h5>
                  <Box display='flex' alignItems='center' id='quantity'>
                    <QuantityControl id="quantity" />
                  </Box>
                  <Button variant='contained' color='error' id='remove' size='large'>
                      Remove
                    </Button>
                </div>
                <div className='products'>
                  <img src='your_image_source_here' alt='Product' />
                  <h2>{name}</h2>
                  <h3>{description}</h3>
                  <h5>Rs: {amount}</h5>
                  <Box display='flex' alignItems='center' id='quantity'>
                    <QuantityControl id="quantity" />
                  </Box>
                  <Button variant='contained' color='error' id='remove' size='large'>
                      Remove
                    </Button>
                </div>
                <div className='products'>
                  <img src='your_image_source_here' alt='Product' />
                  <h2>{name}</h2>
                  <h3>{description}</h3>
                  <h5>Rs: {amount}</h5>
                  <Box display='flex' alignItems='center' id='quantity'>
                    <QuantityControl id="quantity" />
                  </Box>
                  <Button variant='contained' color='error' id='remove' size='large'>
                      Remove
                    </Button>
                </div>
              </div>
              <div className='amount'>
                <h2>Total Amount</h2>
                <div className='calculate'>
                  <h4>Amount: {amount}</h4>
                  <h4>Shipping: {shipping}</h4>
                </div>
                <h3>Total: {total}</h3>
                <Button variant='contained' id='proceed'>
                  Order now
                </Button>
              </div>
            </CardContent>
            <CardActions>{/* Add any card actions if needed */}</CardActions>
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default Cart;
