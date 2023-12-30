import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Validation from '../Backend/RegisterValidation';

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confPassword: '',
  });

  const [errors, setErrors] = useState({})

  const handleInputChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
  
    // Se não houver erros, continue com o envio ou outra lógica
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulário enviado com sucesso!');
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