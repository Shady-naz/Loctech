import { makeStyles } from "@material-ui/core/styles";

 const styles = makeStyles(theme => ({
    headerStyle: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(5),
        backgroundColor: "#009999",
        marginLeft: theme.spacing(31),
        marginRight: theme.spacing(12.5),
    },
    gridInputStyle: {
        marginRight: "5px", 
        marginLeft: "30px"
    },
    dividerStyle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1)
    },
    paperStyle: {
        marginBottom: theme.spacing(25),
        marginLeft: theme.spacing(3),
        width: "1000px",
        height: "535px",
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        marginTop: theme.spacing(0)
    },
    gridLink: {
        marginTop: theme.spacing(15),
        // marginLeft: theme.spacing(5)
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
        marginLeft: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        "& a:hover": {
            color: "white"
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
        marginLeft: theme.spacing(60),
        borderRadius: theme.shape.borderRadius
    }
}));

export default styles