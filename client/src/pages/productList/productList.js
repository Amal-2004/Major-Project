import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Box, Card, CardActions, CardContent, Button, Modal, TextField } from '@mui/material';
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
import { Link } from 'react-router-dom';
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
  const [editProduct, setEditProduct] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/product");
      if (response.status === 200) {
        setRows(response.data);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      Swal.fire('Error!', error.message || 'Something went wrong!', 'error');
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setOpenEditModal(true);
  };

  const handleEditDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:9000/product/${productId}`);
      if (response.status === 200) {
        setOpenEditModal(false);
        fetchData();
        Swal.fire('Success!', 'Product deleted successfully!', 'success');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      Swal.fire('Error!', error.message || 'Something went wrong!', 'error');
    }
  };

  const handleEditSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:9000/product/${editProduct._id}`,
        editProduct
      );
      if (response.status === 200) {
        setOpenEditModal(false);
        fetchData();
        Swal.fire('Success!', 'Product updated successfully!', 'success');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      Swal.fire('Error!', error.message || 'Something went wrong!', 'error');
    }
  };

  const handleEditCancel = () => {
    setEditProduct(null);
    setOpenEditModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <ThemeProvider theme={theme}>
      <Navbar />
     
      <div className='box'>
        <Box width='1200px'>
          <Card id="card" className='card'>
            <CardContent>
            <h3 id="new">+</h3>
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
                          <StyledTableCell align="left">
                            <EditIcon
                              style={{ color: 'green', cursor: 'pointer' }}
                              onClick={() => handleEdit(row)}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <DeleteIcon
                              style={{ color: 'red', cursor: 'pointer' }}
                              onClick={() => handleEditDelete(row._id)}
                            />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </CardContent>
            <CardActions>
            <Link to="../products/productUpload.js" style={{ textDecoration: 'none', color: 'black' }}>
                <h3 id="new">+</h3>
              </Link>
            </CardActions>
          </Card>
        </Box>
      </div>
      {/* Edit Modal */}
      <Modal
        open={openEditModal}
        onClose={handleEditCancel}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="edit-modal-title">Edit Product</h2>
          <TextField
            label="Product Name"
            value={editProduct?.productName || ''}
            onChange={(e) =>
              setEditProduct((prev) => ({ ...prev, productName: e.target.value }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Product Model"
            value={editProduct?.productModel || ''}
            onChange={(e) =>
              setEditProduct((prev) => ({ ...prev, productModel: e.target.value }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Amount"
            value={editProduct?.productPrice || ''}
            onChange={(e) =>
              setEditProduct((prev) => ({ ...prev, productPrice: e.target.value }))
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editProduct?.description || ''}
            onChange={(e) =>
              setEditProduct((prev) => ({ ...prev, description: e.target.value }))
            }
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleEditSave}>
            Save
          </Button>
          <Button variant="outlined" onClick={handleEditCancel} style={{ marginLeft: '10px' }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default ProductList;
