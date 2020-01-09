import React, { Component } from 'react';
import LoginBox from './LoginBox';
import RegisterBox from './../register/RegisterBox';

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
        }
    }

    switchLogin = () => this.setState({ isLoginOpen: true, isRegisterOpen: false })
    
    switchRegister = () => this.setState({ isRegisterOpen: true, isLoginOpen: false })

    render() {
        return (
            <div className="root-container">
                <div className="box-controller">
                    <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.switchLogin}>
                        Login
                    </div>
                    <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.switchRegister}>
                        Register
                    </div>
                </div>

            <div className="box-container">
                {this.state.isLoginOpen && <LoginBox onLogin={this.props.isLoginSuccess} />}
                {this.state.isRegisterOpen && <RegisterBox />}
            </div>

      </div>
        );
    }
}

export default LoginScreen;