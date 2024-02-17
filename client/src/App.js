
import { Route, Routes } from "react-router-dom";
import LoginForm from "./component/login/login";
import SignupForm from "./component/signup/signup";
import Dashboard from "./component/assets/js/dashboard";
import Forgetpassword from "./component/forget/forgetpassword";
import Otp from "./component/forget/otp";
import Resetpassword from "./component/forget/resetpassword";
import CustomCard from "./component/assets/js/card";
import Sidebar from "./component/Dashboard/sidenavebar";
import Productupload from "./component/products/proupload";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LoginForm} />
        <Route path="/signup" Component={SignupForm} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/forgetpassword" Component={Forgetpassword} />
        <Route path="/otp" Component={Otp} />
        <Route path='/resetpassword' Component={Resetpassword} />
        <Route path="/card" Component={CustomCard} />
        <Route path="/sidenavebar" Component={Sidebar} />
        <Route path="/proupload" Component={Productupload} />
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

export default App;  
  */

