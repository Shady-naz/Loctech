import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    paperStyle: {
        marginBottom: theme.spacing(25),
        marginLeft: theme.spacing(3),
        width: "1000px",
        height: "535px",
        display: "flex",
        flexWrap: "wrap",
        marginTop: theme.spacing(0)
    },
    headerStyle: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(5),
        backgroundColor: "#009999",
        marginLeft: theme.spacing(31),
        marginRight: theme.spacing(12.5),
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
        borderRadius: theme.shape.borderRadius
    },
    nextLinkStyle: {
        backgroundColor: "#009999", 
        color: "white",
        textDecoration: "none", 
        paddingRight: theme.spacing(2.5),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginLeft: theme.spacing(57),
        borderRadius: theme.shape.borderRadius
    },
    dividerStyle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1)
    },
    gridInputStyle: {
        marginRight: "5px", 
        marginLeft: "30px"
    }
}));

export default styles