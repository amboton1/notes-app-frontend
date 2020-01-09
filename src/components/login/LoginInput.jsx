import React from "react";

const LoginInput = props => {
  return (
    <div className="inner-container">
      <div className="header" onClick={props.switchLogin}>
        Login
      </div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            onChange={props.onChangeUsername}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={props.onChangePassword}
          />
        </div>

        <button type="button" className="login-btn" onClick={props.submitLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginInput;
