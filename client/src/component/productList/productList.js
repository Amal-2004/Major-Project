import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Box, Button, Card, CardActions, CardContent } from '@mui/material';
import Navbar from './navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';

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

function createData(product_name, product_model, amount,description,action ) {
  return { product_name, product_model, amount,description,action };
}

const rows = [
  createData(1,'Grinder','gdhgsg',2000,'dfghj','3456'),
  createData(2, ),
  createData(3, ),
  createData(4, ),
  createData(5,  ),
];

function ProductList() {
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
                        <StyledTableCell align="right">Product Name</StyledTableCell>
                        <StyledTableCell align="right">Product Model</StyledTableCell>
                        <StyledTableCell align="right">Amount</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                      {rows.map((row) => (
                        <StyledTableRow key={row.product_name}>
                          <StyledTableCell component="th" scope="row">
                            {row.product_name}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.product_model}</StyledTableCell>
                          <StyledTableCell align="right">{row.amount}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.action}</StyledTableCell>
                         

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
