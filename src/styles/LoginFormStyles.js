import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles (theme => ({
    loginForm: {
        backgroundImage: "url(https://previews.123rf.com/images/artzzz/artzzz1605/artzzz160500249/56926445-bio-bio-chile-november-23-2015-semi-trailer-truck-mack-vision-at-the-interurban-freeway-.jpg )",
        backgroundSize: "cover",
        backgroundPosition :"center",
        backgroundRepeat : "no-repeat", 
        margin: "0 auto",
        width: "100vw",
        height: "100vh"
    },
    loginHeader: {   
        margin: "0 auto", 
        backgroundColor: "#009999",
        display: "flex",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(12.5),
        zIndex: 5,
        marginLeft: theme.spacing(64),
        position: "relative",
        width: "23rem", 
        height: "42px"
    },
    loginGrid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        marginLeft: theme.spacing(62),
        marginTop: theme.spacing(15)
    },
    loginPaper: {
        width: theme.spacing(50),
        height: theme.spacing(58.8),
        background: "ghostwhite"
    },
    loginContainer: {
        marginTop: theme.spacing(10)
    },
    loginLabel: {
        marginLeft: theme.spacing(5),
    },
    loginInput: {
        width: theme.spacing(40),
        height: theme.spacing(4.7),
        marginLeft: theme.spacing(5),
        borderColor: "white",
        borderRadius: theme.shape.borderRadius + 1
    },
    loginButton: {
        width: "23rem", 
        height: "42px",
        color: "white",
        marginTop: theme.spacing(18),
        marginLeft: theme.spacing(1.7),
        borderRadius: theme.shape.borderRadius + 1,
        backgroundColor: "#009999",
        borderColor: "#009999"
    },
    loginText: {
        marginLeft : "120px",
        marginTop: theme.spacing(4)
    }
}));

export default useStyles;
