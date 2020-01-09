import React, { Component } from "react";
import Notes from "./components/Notes";
import LoginScreen from './components/login/LoginScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isSucessLogin: false
     };
  }

  isLoginSuccess = (isSucessLogin) => this.setState({ isSucessLogin  });

  renderLogin = () => (
    <LoginScreen isLoginSuccess={this.isLoginSuccess} />
  );

  render() {
    return (
      this.state.isSucessLogin 
        ? <Notes isLoginSuccess={this.isLoginSuccess} />
        : this.renderLogin() 
    );
  }
}

export default App;
