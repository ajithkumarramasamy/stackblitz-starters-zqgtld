import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const local_pass = JSON.parse(localStorage.getItem(`password_${username}`));
    if (password === local_pass) {
      setErr(false);
      handleLogin(username, password);
      navigate('/note');
    } else {
      setErr(true);
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
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
        src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="login-image"
        alt="website login"
      />
      <form className="form-container">
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        {err ? <p className="err">Invalid Password</p> : null}
        <button onClick={(e) => handleSubmit(e)} className="login-button">
          Login
        </button>
        <p onClick={() => handleSignUp()} className="sign">
          sign up
        </p>
      </form>
    </div>
  );
};

export default Login;
