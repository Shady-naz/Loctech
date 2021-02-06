// import { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
// import {authContext} from "./ProvideAuth";
import useStyles from "./styles/NavbarStyles";

export default function Navbar () {
    const classes = useStyles ();
    // const auth = useContext(authContext)

    return (
        <div>
            <Paper className = {classes.navbarPaper}>
                <Grid>
                    <Link className = {classes.navbarHomeLink} to = "/"> Home </Link>
                </Grid>
                <Grid>
                    {/* <Link className = {classes.navbarLink} to = "/"> Sign up </Link>
                    <Link className = {classes.navbarLink} to = "/"> Login </Link> */}
                    <Link className = {classes.navbarLink} to = "/"> Logout</Link>
                </Grid>
            </Paper>
        </div>
    )
}