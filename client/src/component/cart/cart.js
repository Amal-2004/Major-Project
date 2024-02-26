import React, { useState } from 'react';
import Navbar from './navbar';
import Box from '@mui/material/Box';  
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function Cart() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
const amount=100
const name='Angle Grinder'
const description='Description'
const shipping=40
const total=amount+shipping
    return (
        <div>
            <Navbar />
            <div className='box'>
                <Box width='1200px'>
                    <Card id="card" className='card'>
                        <CardContent>
                            <div className='cont'>
                                <div className='products'>
                                    <img src='your_image_source_here' alt='Product' />
                                    <h2>Angle Grinder</h2>
                                    <h3>Description</h3>
                                    <h5>Rs : {amount}</h5>
                                    <Box display="flex" alignItems="center" style={{ marginTop: '-40px', marginLeft: '10px' }}>
                                        <h4 style={{ marginLeft: '450px', marginTop: '-90px' }}>Quantity </h4>
                                        <span onClick={handleDecrease} style={{ cursor: 'pointer', fontSize: '35px', fontWeight: 'bold', marginLeft: '30px', marginTop: '-100px' }}>-</span>
                                        <Typography variant="h6" style={{ margin: '0 10px', fontSize: '30px', marginLeft: '10px', marginTop: '-100px' }}>
                                            {quantity}
                                        </Typography>
                                        <span onClick={handleIncrease} style={{ cursor: 'pointer', fontSize: '30px', marginLeft: '5px', marginTop: '-100px' }}>+</span>
                                        <Button variant="contained" color="error" id="remove" size='large'>
                                            Remove
                                        </Button>                                    
                                    </Box>
                                </div>
                                <div className='products'>
                                    <img src='your_image_source_here' alt='Product' />
                                    <h2>{name}</h2>
                                    <h3>{description}</h3>
                                    <h5>Rs : {amount}</h5>
                                    <Box display="flex" alignItems="center" style={{ marginTop: '-40px', marginLeft: '10px' }}>
                                        <h4 style={{ marginLeft: '450px', marginTop: '-90px' }}>Quantity </h4>
                                        <span onClick={handleDecrease} style={{ cursor: 'pointer', fontSize: '35px', fontWeight: 'bold', marginLeft: '30px', marginTop: '-100px' }}>-</span>
                                        <Typography variant="h6" style={{ margin: '0 10px', fontSize: '30px', marginLeft: '10px', marginTop: '-100px' }}>
                                            {quantity}
                                        </Typography>
                                        <span onClick={handleIncrease} style={{ cursor: 'pointer', fontSize: '30px', marginLeft: '5px', marginTop: '-100px' }}>+</span>
                                        <Button variant="contained" color="error" id="remove" size='large'>
                                            Remove
                                        </Button>                                    
                                    </Box>
                                </div>
                               
                            </div>
                            <div className='amount'>
                                    <h2>Total Amount</h2>
                                    <div className='calculate'>
                                    <h4>Amount : {amount}</h4>
                                    <h4>Shipping : {shipping}</h4>
                                    </div>
                                    <h3>Total : {total}</h3>
                            </div>   
                        </CardContent>
                        <CardActions>
                            {/* Add any card actions if needed */}
                        </CardActions>
                    </Card>
                </Box>
            </div>
        </div>
    );
}

export default Cart;
