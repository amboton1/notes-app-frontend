import React from 'react';

const RegisterInput = (props) => {
    return (
        <div className="inner-container">
        <div className="header" onClick={props.switchRegister}>Register</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={props.onChangeEmail}
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
          <button
            type="button"
            className="login-btn"
            onClick={props.submitRegister}
          >
            Register
          </button>
        </div>
      </div>
    );
}

export default RegisterInput;