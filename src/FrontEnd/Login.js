import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Validation from '../Backend/LoginValidations';
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css';

function Login() {

  const [values, setValues] = useState({
    username: '',
    password: '',
    warning: ''
  });

  const [errors, setErrors] = useState({})

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

 
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:3001/login', values)
        .then(res => {
          if(res.data === "Success"){
            navigate('/home');
          }else if(res.data === "Fail"){
            const updatedErrors = {
              warning: "Incorrect username or password!",
            };
            setErrors(updatedErrors, () => {
            });
          }else if(res.data === "Error"){
            const updatedErrors = {
              warning: "Something went wrong, please try again!",
            };
            setErrors(updatedErrors, () => {
            });
          }
          
          
        }).catch(err => console.log(err.response));
    }
  };

  const spaceStyle = {
    marginBottom: errors.warning ? '15px' : '25px',
  };

  return (
    
    <div className="App">
        <div className="App-Login">
          <div className="logo">
            <p>Login</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <i className="fa fa-user icon"></i>
                <input type="text" id="username" name="username" onChange={handleInputChange} />
              </div>
              {errors.username && <span className="text-danger">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <i className="fa fa-lock icon"></i>
                <input type="password" id="password" name="password" onChange={handleInputChange}/>
              </div>
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>

            <div className="warning-label">
              {errors.warning && <span className="text-danger-warning">{errors.warning}</span>}
            </div>

            <div className="space" style={spaceStyle}></div>

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

export default Login;
