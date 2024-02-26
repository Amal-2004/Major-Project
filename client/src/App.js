import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login/login";
import SignupForm from "./pages/signup/signup";
import Forgetpassword from "./component/forget/forgetpassword";
import Otp from "./component/forget/otp";
import Resetpassword from "./component/forget/resetpassword";
import Sidebar from "./pages/Dasboard/sidebar/sidenavebar";
import Productupload from "./component/products/productupload";
<<<<<<< HEAD
import Home from "./pages/home/home"
import OrderList from "./component/orderList/orderList";
import ProductList from "./component/productList/productList";
import PopupWindow from "./component/productList/add";
import Index from "./pages/Dasboard/content";
//import Newsletter from "./component/newsletters/newsletter"

=======
import Home from "./component/home/home"
import OrderList  from "./component/orderList/orderList";
import ProductList  from "./component/productList/productList";
import Newsletter from "./component/newsletters/newsletter"
import Cart from './component/cart/cart'
>>>>>>> e73e958fdc32c7027558a4ca1404cea816eda0e9
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
<<<<<<< HEAD
        <Route path="/add" Component={PopupWindow} />
        <Route path="/index" Component={Index}/>
=======
        <Route path="/newsletter" Component={Newsletter} />
        <Route path="/cart" Component={Cart} />
>>>>>>> e73e958fdc32c7027558a4ca1404cea816eda0e9
      </Routes>
    </>
  )
}

export default App

/* import React from 'react';
=======
export default App 
/* 
import React from 'react';
>>>>>>> 84f7e8ecf3f49ceba7d1c059a8f7a51e364743d5
import Index from './component/pages';

function App() {
  return (
    <div>
      <Index/>
    </div>
  );
}

export default App;  */



 