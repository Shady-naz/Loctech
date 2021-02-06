import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles ({
    employeeFrag: { 
        marginLeft: "25px", 
        marginRight: "25px", 
        paddingBottom: "65px"
    },
    employeeArrowIcon: {
        fontSize: "large", 
        width: "50px", 
        height: "25px", 
        color: "white",
        "&:hover": {
            fontSize: "70px"
        }
    },
    employeeHeaderGrid: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        position: "absolute",
        zIndex: 5
    },
    employeeHeader: {
        padding: 8,
        width: "950px",
        color: "white",
        backgroundColor: "#009999",
        marginLeft: '25px'
    },
    employeePaperGrid: {
        width: "1000px",
        padding: 12,
        marginTop: "25px",
        position: "relative",
        backgroundColor: "ghostwhite"
    },
    employeeLink: {
        textAlign: "center",
        width:"160px",
        padding: 8,
        marginLeft: "25px",
        marginTop: "20px",
        marginBottom: "10px",
        backgroundColor: "#009999"
    },
    employeeDivider: {
        marginLeft: "25px",
        marginBottom: "10px"
    }
});

export default useStyles;