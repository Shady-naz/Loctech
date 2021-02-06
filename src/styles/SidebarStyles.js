import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
     navStyle: {
        marginLeft: "5px", 
        marginTop: "10px", 
        marginRight: "10px",
        width: "205px", 
        height: "600px",
        backgroundColor: "ghostwhite"
    },
    navItemHeadStyle: {
        textAlign: "center",
        marginRight: "10px",
        marginTop: "70px"
    },
    navItemSubHeadStyle: {
        fontWeight: "bold",
        textAlign: "center",
        marginRight: "7px",
        marginBottom: "35px"
    },
    navFirstItemStyle: { 
        marginLeft: "15px",
        marginTop: "10px",
        marginBottom: "25px"
    },
    navItemStyle: { 
        marginLeft: "15px",
        marginTop: "10px",
        marginBottom: "15px"
    },
     navHeadIconStyle: {
        color: "white", 
        border: "1px solid #34ebcc", 
        background: "#34ebcc", 
        borderRadius: "50%"
    },
    navItemIconStyle: {
        color: "white", 
        border: "1px solid red", 
        background: "#e34060", 
        borderRadius: "50%"
    }
});

export default styles