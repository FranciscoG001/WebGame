import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className="App">
      <div className="App-Register">
        <div className="logo">
          <p>New account</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="form-group">
            <label htmlFor="confPassword">Confirm Password</label>
            <input type="password" id="confPassword" name="confPassword" />
          </div>

          <div className="space"></div>

          <div className="form-group">
            <button className="button-17" type="submit">Create</button>
          </div>

          <div className="register-label">
            <Link to="/">
              Already have an account!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;