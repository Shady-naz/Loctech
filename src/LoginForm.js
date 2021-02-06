import { useContext } from "react";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid";
import { authContext } from "./ProvideAuth";
import useStyles from "./styles/LoginFormStyles";

export default function LoginForm () {
    
    const auth = useContext(authContext)

    const classes = useStyles();
    return (
        <div className = {classes.loginForm}>
            <Grid container>
                <Paper className = {classes.loginHeader}> Log In </Paper>
                <Grid item xs = {6} className = {classes.loginGrid}>
                    <Paper className = {classes.loginPaper}>
                        <form onSubmit = { auth.signinUser}>
                            <Grid container className = {classes.loginContainer}>
                                <Grid> <label className = {classes.loginLabel} htmlFor = "user id"> User ID: </label> </Grid>
                                <Grid>
                                    <input className = {classes.loginInput} type = "text" id = "user id" name = "username" onChange = {auth.handleChange} required />
                                </Grid>
                                <Grid> <label className = {classes.loginLabel} htmlFor = "password"> Password: </label> </Grid>
                                <Grid>
                                    <input className = {classes.loginInput} type = "password" id = "password" name = "password" onChange = {auth.handleChange} required />
                                </Grid>
                                <button className = {classes.loginButton}> LET'S GO <VpnKeyIcon style = {{fontSize: "medium"}} /></button>
                            </Grid>
                        </form>
                        <p className = {classes.loginText}> Forgot your Password ? </p>
                    </Paper>        
                </Grid>
            </Grid>
        </div>
    )
}

