import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login/login";
import SignupForm from "./pages/signup/signup";
import Forgetpassword from "./component/forget/forgetpassword";
import Otp from "./component/forget/otp";
import Resetpassword from "./component/forget/resetpassword";
import Admin from "./pages/Dasboard/sidebar/sidenavebar";
import Productupload from "./component/products/productupload";
import OrderList  from "./component/orderList/orderList";
import ProductList  from "./component/productList/productList";
import Homes from "./pages/home/home";
import Cart from "./component/cart/cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Homes} />
        <Route path="/login" Component={LoginForm} />
        <Route path="/signup" Component={SignupForm} />
        <Route path="/forgetpassword" Component={Forgetpassword} />
        <Route path="/otp" Component={Otp} />
        <Route path='/resetpassword' Component={Resetpassword} />
        <Route path="/admin" Component={Admin} />
        <Route path="/productupload" Component={Productupload} />
        <Route path="/orderlist" Component={OrderList} />
        <Route path="/productlist" Component={ProductList} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </>
  )
}
export default App 
  

