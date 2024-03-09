import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Box, Card, CardActions, CardContent } from '@mui/material';
import Navbar from './navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Swal from 'sweetalert2';

const theme = createTheme();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white, fontSize: 14
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const OrderList = () => {
  const [rows, setRows] = useState([]);


useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get("https://65e716bf53d564627a8de1b2.mockapi.io/pt/orderlist");
      if (response.status === 200) {
        setRows(response.data); // Assuming response.data is an array of purchases
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      Swal.fire('Error!', error.message || 'Something went wrong!', 'error');
    }
  };

  fetchData();
},[])

    console.log(rows);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className='box'>
        <Box width='800px'>
          <Card id="card" className='card'>
            <CardContent>
              <div className='product-con'>
                <TableContainer component={Paper} id='tbl'>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>S.No</StyledTableCell>
                        <StyledTableCell align="right">CustomerID</StyledTableCell>
                        <StyledTableCell align="right">Customer Name</StyledTableCell>
                        <StyledTableCell align="right">Product ID</StyledTableCell>
                        <StyledTableCell align="right">Product Name</StyledTableCell>
                        <StyledTableCell align="right">Delivered by</StyledTableCell>
                        <StyledTableCell align="right">Ordered at</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell> {/* Changed to Actions */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="left">{row.customerID}</StyledTableCell>
                          <StyledTableCell align="left">{row.customerName}</StyledTableCell>
                          <StyledTableCell align="left">{row.productID}</StyledTableCell>
                          <StyledTableCell align="left">{row.productName}</StyledTableCell>
                          <StyledTableCell align="left">{row.deliveryPerson}</StyledTableCell>
                          <StyledTableCell align="left">{row.purchaseDate}</StyledTableCell>
                          <StyledTableCell align="left">
                            <EditIcon style={{ color: 'green', cursor: 'pointer' }} />
                            <DeleteIcon style={{ color: 'red', cursor: 'pointer', marginLeft: '5px' }} />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default OrderList;
