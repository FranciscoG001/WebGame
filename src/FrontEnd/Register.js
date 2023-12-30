import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import Validation from '../Backend/RegisterValidation';
import axios from 'axios'

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confPassword: '',
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
      axios.post('http://localhost:3001/register', values)
        .then(res => {
          if (res.data === "Warning-3") {
            const updatedErrors = {
              username: "Username already in use!",
              email: "Email already in use!",
            };
            setErrors(updatedErrors, () => {
            });
          } 
          else if (res.data === "Warning-2") {
            const updatedErrors = {
              email: "Email already in use!"
            };
            setErrors(updatedErrors, () => {
            });
          } 
          else if (res.data === "Warning-1") {
            const updatedErrors = {
              username: "Username already in use!"
            };
            setErrors(updatedErrors, () => {

            });
          } 
          else 
          {
            navigate('/');
          }
          
        }).catch(err => console.log(err.response));
    }
  };

  return (
    <div className="App">
      <div className="App-Register">
        <div className="logo">
          <p>New account</p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleInputChange} />
            {errors.username && <span className="text-danger">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleInputChange} />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleInputChange} />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confPassword">Confirm Password</label>
            <input type="password" id="confPassword" name="confPassword" onChange={handleInputChange} />
            {errors.confPassword && <span className="text-danger">{errors.confPassword}</span>}          
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