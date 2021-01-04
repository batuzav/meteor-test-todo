import React from 'react'
import { loginForm, theme } from '../../client/services/constants';
import { useForm } from '../../client/services/useForm';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const LoginScreen = () => {
    const [formValues, handleInputChange, reset] = useForm(loginForm);
    const { email, password } = formValues;
    const handleLogin = (e) => {
        console.log('e', e)
    }
    return (
        <ThemeProvider theme={theme}>
            <div className="login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <div className="form-container">
                            <h1>Login</h1>
                        {/* <img className="logo" src={require("../../assets/logo.png")} /> */}
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                            </div>
                            <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                            </div>
                            <div className="form-group flex-group">
                            {/* {authLoading ? (
                                <CircularProgress color="secondary" />
                            ) : (
                                <input
                                type="submit"
                                className="btnSubmit align-items-center"
                                value="Iniciar Sesión"
                                />
                            )} */}

                                <input
                                    type="submit"
                                    className="btnSubmit align-items-center"
                                    value="Iniciar Sesión"
                                />
                            </div>
                        </form>
                        
                        </div>
                    </div>

                <div className="col-md-6 login-form-2">
                
                </div>
            </div>
        </div>
    </ThemeProvider>
    )
}
