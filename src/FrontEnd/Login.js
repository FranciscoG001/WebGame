import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function App() {
  return (
    <div className="App">
      <div className="App-Login">
        <div className="logo">
          <p>Login</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="space"></div>

          <div className="form-group">
            <button className="button-17" type="submit">Login</button>
          </div>

          <div className="register-label">
            <Link to="/register">
              Create new account here!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
