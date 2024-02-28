import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login/login";
import SignupForm from "./pages/signup/signup";
import Forgetpassword from "./component/forget/forgetpassword";
import Otp from "./component/forget/otp";
import Resetpassword from "./component/forget/resetpassword"; 
import Productupload from "./component/products/productupload";
import OrderList  from "./component/orderList/orderList";
import ProductList  from "./component/productList/productList";
import Homes from "./Home/index";
import Cart from "./component/cart/cart";
//import Index from "./pages/Dasboard/content/index";
//import Admin from "./pages/Dasboard/sidebar/sidenavebar";
/* import Dashboard from "./pages/Dasboard/content/Dashboard";
import Filemanage from "./pages/Dasboard/content/Filemanage";
import Order from "./pages/Dasboard/content/Order";
import Save from "./pages/Dasboard/content/Save";
import Setting from "./pages/Dasboard/content/Setting";
import User from "./pages/Dasboard/content/User";
 */ function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact Component={Homes} />
        <Route path="/login" Component={LoginForm} />
        <Route path="/signup" Component={SignupForm} />
        <Route path="/forgetpassword" Component={Forgetpassword} />
        <Route path="/otp" Component={Otp} />
        <Route path='/resetpassword' Component={Resetpassword} />
        {/* <Route path="/index" Component={Index} /> */} 
        <Route path="/productupload" Component={Productupload} />
        <Route path="/orderlist" Component={OrderList} />
        <Route path="/productlist" Component={ProductList} />
        <Route path="/cart" Component={Cart} />
      </Routes>



{/* 
      <Admin>
      <Routes>
        <Route path='/Dashboard' Component={Dashboard}/>
        <Route path='/Filemanage' Component={Filemanage}/>
        <Route path='/Order' Component={Order}/>
        <Route path='/Save' Component={Save}/>
        <Route path='/Setting' Component={Setting}/>
        <Route path='/User' Component={User}/>
      </Routes> 
       </Admin>  */} 
    </div>
  )
}
export default App  
  


/* 
import React from 'react'
import Index from './pages/Dasboard/content'

function App() {
  return (
    <div>
      <Index/>
    </div>
  )
}

export default App  */
