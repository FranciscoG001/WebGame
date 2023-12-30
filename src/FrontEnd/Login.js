import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Validation from '../Backend/LoginValidations';

function App() {

  const [values, setValues] = useState({
    username: '',
    password: '',
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
      <div className="App-Login">
        <div className="logo">
          <p>Login</p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleInputChange}/>
            {errors.username && <span className="text-danger">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleInputChange}/>
            {errors.password && <span className="text-danger">{errors.password}</span>}
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
