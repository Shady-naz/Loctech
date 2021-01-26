import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
     navStyle: {
        marginLeft: "5px", 
        marginTop: "10px", 
        marginRight: "10px",
        width: "205px", 
        height: "530px"
    },
    navItemStyle: { 
        marginLeft: "15px",
        marginTop: "10px"
    },
     navIconHeadStyle: {
        color: "white", 
        border: "1px solid #34ebcc", 
        background: "#34ebcc", 
        borderRadius: "50%"
    },
    navIconItemStyle: {
        color: "white", 
        border: "1px solid red", 
        background: "#e34060", 
        borderRadius: "50%"
    },
    navItemHeadStyle: {
        textAlign: "right",
        marginRight: "10px"
    },
    navItemSubHeadStyle: {
        fontWeight: "bold",
        textAlign: "right",
        marginRight: "10px",
        marginBottom: "35px"
    }
});

export default styles