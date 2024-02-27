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
    color: theme.palette.common.white,
    fontSize: 14
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

function ProductList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/product",);
        if (response.status === 200) {
          setRows(response.data);
          console.log(response.data.products); 
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        Swal.fire('Error!', error.message || 'Something went wrong!', 'error');
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className='box'>
        <Box width='1200px'>
          <Card id="card" className='card'>
            <CardContent>
              <div className='product-con'>
                <TableContainer component={Paper} id='tbl'>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>S.No</StyledTableCell>
                        <StyledTableCell align="left">Product Name</StyledTableCell>
                        <StyledTableCell align="left">Product Model</StyledTableCell>
                        <StyledTableCell align="left">Amount</StyledTableCell>
                        <StyledTableCell align="left">Description</StyledTableCell>
                        <StyledTableCell align="left">Action</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="left">{row.productName}</StyledTableCell>
                          <StyledTableCell align="left">{row.productModel}</StyledTableCell>
                          <StyledTableCell align="left">{row.productPrice}</StyledTableCell>
                          <StyledTableCell align="left">{row.description}</StyledTableCell>
                          <StyledTableCell align="left"><EditIcon  style={{color:'green',cursor:'pointer'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DeleteIcon style={{color:'red',cursor:'pointer'}}/></StyledTableCell>
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

export default ProductList;
