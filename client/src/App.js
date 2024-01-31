
import { Route, Routes } from "react-router-dom";
import LoginForm from "./login/login";
import SignupForm from "./login/signup";
import Dashboard from "./component/assets/js/dashboard";
import Forgetpassword from "./component/assets/js/forgetpassword";
function App()
{
  return(
    <>
    <Routes>
      <Route path="/" Component={LoginForm}/>
      <Route path="/signup" Component={SignupForm}/>
      <Route path="/dashboard" Component={Dashboard}/>
      <Route path="/forgetpassword" Component={Forgetpassword}/>
    </Routes>
    
    </>
  )
}
export default App




