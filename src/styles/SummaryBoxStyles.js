import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    boxIconPaper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 5,
        marginLeft: "35px",
        position: "absolute",
        width: theme.spacing(9.5),
        backgroundColor: props => props.employee.color,
        height: theme.spacing(9.5)
    },
    boxIcon: {
        color: "white"
    },
    boxPaper: {
        marginTop: "20px",
        padding: 8,
        marginLeft: "25px",
        textAlign: "right",
        height: "125px",
        position: "relative"
    },
    boxText: {
        fontSize: 40,
        fontWeight: "light",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start"
    }
}));

export default styles