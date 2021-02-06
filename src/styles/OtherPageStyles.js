import { makeStyles } from "@material-ui/core/styles";

 const styles = makeStyles(theme => ({
    headerStyle: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        backgroundColor: "#009999",
        marginLeft: theme.spacing(28.5),
        marginRight: theme.spacing(11),
    },
    gridInputStyle: {
        marginRight: "5px", 
        marginLeft: "30px"
    },
    dividerStyle: {
        marginBottom: theme.spacing(2)
    },
    subDividerStyle: {
        marginLeft: "30px", 
        marginRight: "52px", 
        marginBottom: "10px"
    },
    paperStyle: {
        marginBottom: theme.spacing(25),
        marginLeft: theme.spacing(1),
        width: "1000px",
        height: "600px",
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        backgroundColor: "ghostwhite"
    },
    gridLink: {
        marginTop: theme.spacing(2.8)
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
        marginLeft: theme.spacing(64.5),
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            textDecoration: "none",
            color: "white",
            fontSize: "15px"
        }
    }
}));

export default styles