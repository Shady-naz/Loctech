import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    paperStyle: {
        marginBottom: theme.spacing(25),
        marginLeft: theme.spacing(1),
        width: "1000px",
        height: "600px",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "ghostwhite"
    },
    headerStyle: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(0.8),
        backgroundColor: "#009999",
        marginLeft: theme.spacing(28.5),
        marginRight: theme.spacing(11),
    },
    gridLink: {
        marginTop: theme.spacing(3.5),
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
        borderColor: "#009999", 
        color: "white",
        textDecoration: "none", 
        paddingRight: theme.spacing(2.5),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginLeft: theme.spacing(62),
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            textDecoration: "none",
            color: "white",
            fontSize: "15px"
        }
    },
    dividerStyle: {
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1)
    },
    subDividerStyle: {
        marginLeft: "30px", 
        marginRight: "52px", 
        marginBottom: "10px"
    },
    gridInputStyle: {
        marginRight: "5px", 
        marginLeft: "30px"
    }
}));

export default styles