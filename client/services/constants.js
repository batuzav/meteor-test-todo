import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        secondary: {
        main: "#282a36",
        },
    },
});


export const loginForm = {
    email: "",
    password: "",
};

export const registerForm = {
    Remail: "",
    Rpassword: "",
    conformRPassword: "",
}