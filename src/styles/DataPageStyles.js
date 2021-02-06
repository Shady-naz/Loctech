import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    paperStyle: {
        marginBottom: theme.spacing(12),
        marginLeft: theme.spacing(1),
        width: "1000px",
        height: "535px",
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        backgroundColor: "ghostwhite"
    },
    headerStyle: {
        padding: theme.spacing(1),
        width: theme.spacing(125),
        backgroundColor: "#009999",
        marginLeft: theme.spacing(29),
    },
    gridLinks: {
        marginTop: theme.spacing(9.8),
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
        marginLeft: theme.spacing(64),
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            textDecoration: "none",
            color: "white",
            fontSize: "15px"
        }
    },
    dividerStyle: {
        marginBottom: theme.spacing(3),
    },
    gridInputStyle: {
        marginLeft: "25px"
    }
}));

export default styles