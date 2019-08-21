import React from "react";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import FormLabel from "@material-ui/core/FormLabel";

export default class LoginFrom extends React.Component {

    state = {
        showPassword: false
    };

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword});
    };

    handleOnKeyPress = (ev) => {
        if (ev.key === 'Enter') this.props.login();
    };

    render() {
        const {handlerUsername, handlerPassword, login, statusText, saveLoginAndPassword, tokenIsRefreshing, isAuthenticated, errorMessage} = this.props;
        return (
            <FormControl onKeyPress={this.handleOnKeyPress}>
                <TextField
                    placeholder="Введите Имя пользователя"
                    label="Имя пользователя"
                    fullWidth={true}
                    onChange={handlerUsername}
                    autoFocus={!tokenIsRefreshing && !isAuthenticated}
                    defaultValue={localStorage.getItem("login")}
                    variant="outlined"
                    error={this.props.errorLogin}
                />
                <TextField
                    placeholder="Введите Пароль"
                    style={{marginTop: 10}}
                    label="Пароль"
                    fullWidth={true}
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    onChange={handlerPassword}
                    defaultValue={localStorage.getItem("password")}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="Переключатель видимости пароля"
                                            onClick={this.handleClickShowPassword}>
                                    {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    error={this.props.errorPassword}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            style={{maxWidth: 180}}
                            checked={Boolean(localStorage.getItem('rememberMe'))}
                            onChange={saveLoginAndPassword}
                            color="primary"
                        />
                    }
                    label={"Запомнить"}
                />
                <Button
                    variant="contained"
                    onClick={login}
                    color="primary"
                >
                    Войти
                </Button>
                <FormLabel error={true}>
                    {errorMessage || statusText}
                </FormLabel>
            </FormControl>
        )
    }

}