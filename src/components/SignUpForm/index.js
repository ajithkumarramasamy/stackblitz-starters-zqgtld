import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
const SignUpForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`password_${username}`, JSON.stringify(password));
    navigate('/');
  };

  const renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </>
    );
  };

  const renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </>
    );
  };

  return (
    <div className="login-form-container">
      <img
        src="https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="login-image"
        alt="website login"
      />
      <form className="form-container">
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button onClick={(e) => handleSubmit(e)} className="login-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
