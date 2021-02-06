import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles (theme => ({
    navbarPaper : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#009999",
        color: "white",
        marginBottom: theme.spacing(1.5),
        height: theme.spacing(6)
    },
    navbarHomeLink: {
        textDecoration: "none",
        color: "white",
        marginLeft: theme.spacing(30),
        "&:hover": {
            textDecoration: "none",
            borderBottom: "4px solid ghostwhite",
            transition: "0.2s ease-in-out",
            color: "ghostwhite"
        }
    },
    navbarLink: {
        textDecoration: "none",
        color: "white",
        marginRight: theme.spacing(3),
        "&:hover": {
            textDecoration: "none",
            borderBottom: "4px solid ghostwhite",
            transition: "0.2s ease-in-out",
            color: "ghostwhite"
        }
    },
    navbarLinkHidden: {
        opacity: "none",
        display: "none"
    }
}));

export default useStyles;