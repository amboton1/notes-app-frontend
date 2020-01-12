import React, { Component } from "react";
import '../scss/style.scss'
import restClient from '../../restClient';
import RegisterInput from "./RegisterInput";
import Modal from 'react-responsive-modal';

class RegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isRegisterSuccessful: false, email: '', password: '' };
  }

  onCloseModal = () => this.setState({ isRegisterSuccessful: false });

  onChangeEmail = (e) => { this.setState({ email: e.target.value })}

  onChangePassword = (e) => { this.setState({ password: e.target.value }) }

  submitRegister = () => {
    restClient.post('/users', { email: this.state.email, password: this.state.password }).then((res) => {
      this.setState({ isRegisterSuccessful: true })
    }).catch(this.state.password.length <= 7 ? console.log('ERR: Password should be => 7') : '')
  }

  render() {
    return (
      this.state.isRegisterSuccessful ? (
        <Modal open={this.state.isRegisterSuccessful} onClose={this.onCloseModal} center>
          <h2>Successfuly registered! You can now login.</h2>
        </Modal>
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
