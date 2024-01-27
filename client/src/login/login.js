import React from 'react'
import './login.css'
function Login () {
  return (
    <section>
      <form>
        <h1>Login</h1>
        <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required />
            <label>Email</label>
        </div>
        <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required />
            <label>Password</label>
        </div>
        <div className="forget">
            <a href="#">Forgot Password ?</a>
        </div>
        <button>Login</button>
        <div className="register">
          <p>Don't have an account ?&nbsp;&nbsp;<a href="#">Sign up</a></p>
        </div>
      </form>
    </section>
  )
}
export default Login;
