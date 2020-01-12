import React, { Component } from "react";
import '../scss/style.scss'
import restClient from '../../restClient';
import LoginInput from "./LoginInput";
import Modal from 'react-responsive-modal';

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        modalIsOpen: false
    };
  }

  onCloseModal = () => this.setState({ modalIsOpen: false });

  onChangeUsername = (e) => { this.setState({email: e.target.value})}

  onChangePassword = (e) => { this.setState({password: e.target.value})}

  submitLogin = () => {
    restClient.post("/users/login", {
      email: this.state.email,
	    password: this.state.password
    })
    .then((res, req) => {
      sessionStorage.setItem('token', res.data.token)
      this.props.onLogin(true);
    })
    .catch((e) => {
      if (e.response.status === 400) {
        console.log("We couldn't verify your account details.");
        this.setState({ modalIsOpen: true })
      }
    });
  }

  render() {
    const { modalIsOpen } = this.state;
    return (
      <div>
        <Modal open={modalIsOpen} onClose={this.onCloseModal} center>
          <h2>Incorrect password or email!</h2>
        </Modal>
        <LoginInput
          switchLogin={this.props.switchLogin}
          onChangeUsername={this.onChangeUsername}
          onChangePassword={this.onChangePassword}
          submitLogin={this.submitLogin}
        />
      </div>
      )
  }
}

export default LoginBox;