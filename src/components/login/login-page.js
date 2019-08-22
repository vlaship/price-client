import React from "react";
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import * as actionCreators from "../../actions/indexActions";
// import {hashHistory} from "react-router";
import LoginFrom from "./login-form";
import {Typography} from "@material-ui/core";

// const mapStateToProps = (state) => ({
//     tokenIsRefreshing: state.auth.tokenIsRefreshing,
//     isAuthenticating: state.auth.isAuthenticating,
//     isAuthenticated: state.auth.isAuthenticated,
//     statusText: state.auth.statusText,
// });

// const mapDispatchToProps = (dispatch) => ({
//     // actions: bindActionCreators(actionCreators, dispatch)
// });

const back = {
    display: 'flex',
    minHeight: '100vh',
    backgroundSize: 'cover',
    justifyContent: 'flex-end'
};

const container = {
    width: '20%',
    marginRight: '40%',
    minWidth: 300
};

const block = {
    backgroundColor: '#ffffff',
    marginTop: '30%',
    padding: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
};

const emptyErrorMessage = "Username and Password can't be empty";

// @connect(mapStateToProps, mapDispatchToProps)
export default class LoginPage extends React.Component {

    state = {
        rememberMe: false,
        inputUsername: null,
        inputPassword: null,
        errorLogin: false,
        errorPassword: false,
        errorMessage: null
    };

    componentDidMount() {
        // todo comment out
        //const refreshToken = localStorage.getItem('refreshToken');
        const refreshToken = false;
        if (refreshToken) {
            this.props.actions.initRefreshAuthToken(refreshToken);
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.tokenIsRefreshing && nextProps.isAuthenticated) {
            // hashHistory.push('/home');
        }
    }

    login() {
        this.setState({
            errorLogin: false,
            errorPassword: false,
            errorMessage: null
        });

        const username = !!this.state.inputUsername ? this.state.inputUsername.trim() : localStorage.getItem("email");
        const password = !!this.state.inputPassword ? this.state.inputPassword.trim() : localStorage.getItem("password");
        if (username && password) {
            this.props.actions.loginUser(username, password);
            return;
        }

        if (!username) this.setState({errorLogin: true});
        if (!password) this.setState({errorPassword: true});
        this.setState({errorMessage: emptyErrorMessage});
    }

    handlerUsername(val) {
        this.setState({inputUsername: !!val ? val.target.value : null})
    }

    handlerPassword(val) {
        this.setState({inputPassword: !!val ? val.target.value : null})
    }

    render() {
        return ((!this.props.tokenIsRefreshing && !this.props.isAuthenticated) ? this.renderLogin() : null);
    }

    saveLoginAndPassword() {
        if (localStorage.getItem("rememberMe")) {
            localStorage.removeItem("rememberMe");
            this.setState({rememberMe: false})
        } else {
            localStorage.setItem("rememberMe", true);
            this.setState({rememberMe: true})
        }
    }

    renderLogin() {

        return (
            <div style={back}>
                <div style={container}>
                    <div style={block}>
                        <Typography variant="h4" color="inherit" noWrap style={{'margin': '10px'}}>
                            pila.by/price
                        </Typography>
                        <LoginFrom
                            tokenIsRefreshing={this.props.tokenIsRefreshing}
                            isAuthenticated={this.props.isAuthenticated}
                            handlerUsername={this.handlerUsername.bind(this)}
                            handlerPassword={this.handlerPassword.bind(this)}
                            login={this.login.bind(this)}
                            statusText={this.props.statusText}
                            saveLoginAndPassword={this.saveLoginAndPassword.bind(this)}
                            errorLogin={this.state.errorLogin}
                            errorPassword={this.state.errorPassword}
                            errorMessage={this.state.errorMessage}
                        />
                    </div>
                </div>
            </div>

        );
    }
}
