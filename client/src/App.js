 import { Route, Routes } from "react-router-dom";
import LoginForm from "./login/login";
import SignupForm from "./login/signup";
import Dashboard from "./component/assets/js/dashboard";
import Forgetpassword from "./component/assets/js/forgetpassword";
import otp from "./component/assets/js/otp";
import Resetpassword from "./component/assets/js/resetpassword";
function App()
{
  return(
    <>
    <Routes>
      <Route path="/" Component={LoginForm}/>
      <Route path="/signup" Component={SignupForm}/>
      <Route path="/dashboard" Component={Dashboard}/>
      <Route path="/forgetpassword" Component={Forgetpassword}/>
      <Route path="/otp" Component={otp}/>
      <Route path='/resetpassword' Component={Resetpassword}/>
    </Routes>
    </>
  )
}
export default App
 


