import { makeStyles } from "@material-ui/core/styles";

 const styles = makeStyles(theme => ({
    headerStyle: {
        padding: theme.spacing(1),
        backgroundColor: "#009999",
        marginLeft: theme.spacing(28),
        width: theme.spacing(124.8),
    },
    gridInputStyle: {
        marginRight: "25px", 
        marginLeft: "30px"
    },
    dividerStyle: {
        marginBottom: theme.spacing(3)
    },
    paperStyle: {
        marginBottom: theme.spacing(25),
        width: "1000px",
        height: "400px",
        backgroundColor: "ghostwhite"
    },
    gridLink: {
        marginTop: theme.spacing(11.8)
    },
    backLinkStyle: {
        backgroundColor: "#6c6e69",
        textDecoration: "none", 
        color: "white",
        paddingRight: theme.spacing(2.5),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginRight: theme.spacing(40),
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            textDecoration: "none",
            color: "white",
            fontSize: "15px"
        }
    },
    nextLinkStyle: {
        backgroundColor: "#009999", 
        color: "white",
        textDecoration: "none", 
        paddingRight: theme.spacing(2.5),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginLeft: theme.spacing(63.8),
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            textDecoration: "none",
            color: "white",
            fontSize: "15px"
        }
    }
}));

export default styles