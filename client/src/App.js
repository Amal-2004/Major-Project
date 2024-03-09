 import { Route, Routes } from "react-router-dom";
import LoginForm from "./component/login/login";
import SignupForm from "./component/signup/signup";
import Forgetpassword from "./component/forget-password/forgetpassword";
import Otp from "./component/forget-password/otp";
import Resetpassword from "./component/forget-password/resetpassword"; 
import Productupload from "./pages/products/productupload";
import OrderList  from "./pages/orderList/orderList";
import ProductList  from "./pages/productList/productList";
import Cart from "./pages/cart/cart";
import Dashboard from "./pages/Dasboard/content/Dashboard";
import Filemanage from "./pages/Dasboard/content/Filemanage";
import Order from "./pages/Dasboard/content/Order";
import Save from "./pages/Dasboard/content/Save";
import Setting from "./pages/Dasboard/content/Setting";
import User from "./pages/Dasboard/content/User";

  function App() {
  return (
    <div>
    <div>
      <Routes>
        <Route path="/" Component={LoginForm} />
        <Route path="/signup" Component={SignupForm} />
        <Route path="/forgetpassword" Component={Forgetpassword} />
        <Route path="/otp" Component={Otp} />
        <Route path='/resetpassword' Component={Resetpassword} />
        {/* <Route path="/index" Component={Index} /> */} 
        <Route path="/productupload" Component={Productupload} />
        <Route path="/orderlist" Component={OrderList} />
        <Route path="/productlist" Component={ProductList} />
        <Route path="/cart" Component={Cart} />
        <Route path="/dash" Component={Dashboard}/>
        <Route path="file" Component={Filemanage}/>
        <Route path="order" Component={Order}/>
        <Route path="save" Component={Save}/>
        <Route path="setting" Component={Setting}/>
        <Route path="user" Component={User}/>
      </Routes>
      </div>
      
      </div>
  )
}
export default App  
  


/* 
import React from 'react'
import { Typography } from '@mui/material'
//import Index from './pages/Dasboard/content'

function App() {
  return (
    <div>
       <Index/> 
      <Typography variant="h4" color='red' id="h" gutterBottom>
          Sign Up
        </Typography>
    </div>
  )
}

export default App  */ 
