import React , {useState,useEffect}from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Box, Button, Card, CardActions, CardContent, TextField } from '@mui/material';
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
    color: theme.palette.common.white,fontSize:14
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


function OrderList() {
  const [row, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/purchase",);
        if (response.status === 200) {
          setRows(response.data);
          console.log(response.data.purchase); 
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
                        <StyledTableCell align="right">CustomerID</StyledTableCell>
                        <StyledTableCell align="right">Customer Name</StyledTableCell>
                        <StyledTableCell align="right">Product ID</StyledTableCell>
                        <StyledTableCell align="right">Product Name</StyledTableCell>
                        <StyledTableCell align="right">Delivered by</StyledTableCell>
                        <StyledTableCell align="right">Ordered at</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {row.map((rows, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="left">{rows.customerID}</StyledTableCell>
                          <StyledTableCell align="left">{rows.customerName}</StyledTableCell>
                          <StyledTableCell align="left">{rows.productID}</StyledTableCell>
                          <StyledTableCell align="left">{rows.productName}</StyledTableCell>
                          <StyledTableCell align="left">{rows.deliveryPerson}</StyledTableCell>
                          <StyledTableCell align="left">{rows.purchaseDate}</StyledTableCell>
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

export default OrderList;
