import React, { Component } from "react";
import '../scss/style.scss'
import restClient from '../../restClient';
import RegisterInput from "./RegisterInput";

class RegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isRegisterSuccessful: false, email: '', password: '' };
  }

  onChangeEmail = (e) => { this.setState({ email: e.target.value })}

  onChangePassword = (e) => { this.setState({ password: e.target.value }) }

  submitRegister = () => {
    restClient.post('/users', { email: this.state.email, password: this.state.password }).then(() => {
      this.setState({ isRegisterSuccessful: true })
    }).catch(this.state.password.length <= 7 ? console.log('ERR: Password should be => 7') : '')
  }

  render() {
    return (
      this.state.isRegisterSuccessful ? (
        <h1>Register Successful!</h1>
      ) :
      <RegisterInput
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        submitRegister={this.submitRegister}
      />
    );
  }
}

export default RegisterBox;
