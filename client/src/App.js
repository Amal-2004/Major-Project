import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login/login";
import SignupForm from "./pages/signup/signup";
import Forgetpassword from "./component/forget/forgetpassword";
import Otp from "./component/forget/otp";
import Resetpassword from "./component/forget/resetpassword";
import Sidebar from "./pages/Dasboard/sidebar/sidenavebar";
import Productupload from "./component/products/productupload";
import Home from "./pages/home/home"
import OrderList from "./component/orderList/orderList";
import ProductList from "./component/productList/productList";
import PopupWindow from "./component/productList/add";
import Index from "./pages/Dasboard/content";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={LoginForm} />
        <Route path="/signup" Component={SignupForm} />
        <Route path="/forgetpassword" Component={Forgetpassword} />
        <Route path="/otp" Component={Otp} />
        <Route path='/resetpassword' Component={Resetpassword} />
        <Route path="/sidenavebar" Component={Sidebar} />
        <Route path="/productupload" Component={Productupload} />
        <Route path="/orderlist" Component={OrderList} />
        <Route path="/productlist" Component={ProductList} />
        <Route path="/add" Component={PopupWindow} />
        <Route path="/index" Component={Index}/>
      </Routes>
    </>
  )
}
export default App

/* import React from 'react';
import Index from './component/pages';

function App() {
  return (
    <div>
      <Index/>
    </div>
  );
}

export default App;  */



