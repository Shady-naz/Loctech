import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import {Link, useLocation} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Stepper from "./Stepper";
import styles from "./styles/OtherPageStyles.js";

export default function Otherpage () {
const classes = styles();
let location = useLocation ();

const {bankDetails, employeeInfo, personalData, steps, bankActiveStep, remActiveStep} = location.state;
const [ otherActiveStep, setOtherActiveStep] = useState(bankActiveStep)
const [otherData, setOtherData] = useState ({
    spouseDetails: {
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        children: ""
    },
    nextOfKin: {
        firstname: "",
        lastname: "",
        phone: "",
        address: ""
    },
    emergencyContact: {
        emergencyName1: "",
        emergencyAddress1: "",
        emergencyPhone1: "",
        emergencyName2: "",
        emergencyAddress2: "",
        emergencyPhone2: ""
    }
});

useEffect(()=> {
    if (bankActiveStep !== undefined) {
        return setOtherActiveStep((otherActiveStep) => otherActiveStep + 1)
    } else { 
        return setOtherActiveStep(remActiveStep)}
}, [])

const handleChange = evt => {
    setOtherData({...otherData, [evt.target.name]: evt.target.value})
}

return (
    <Grid container style = {{padding: 16, marginLeft: "32px"}}>
        <Grid item xs={12}>
            <Paper className={classes.headerStyle}>
                <Typography> Add Employee </Typography>
            </Paper>
        </Grid>
        <Sidebar newNavStyle = {classes.sideStyle} />
        <Paper className = {classes.paperStyle}>
            <Grid item xs = {12}>
                <Stepper steps = {steps} activeStep = {otherActiveStep} />
                <Divider className = {classes.dividerStyle} />
                <Typography style = {{marginLeft: "30px", fontWeight: "bold"}}> Spouse Details </Typography>
                <Divider className = {classes.subDividerStyle}/>
                <form>
                <Grid container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {5}>
                        <input  style = {{ width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Last Name*" aria-label="Last Name" />
                    </Grid>
                    <Grid item xs = {5}>
                        <input style = {{marginLeft: "45px", width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder={`First Name*`} aria-label="First Name" />
                    </Grid>
                </Grid>
                <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {5}>
                        <input style = {{width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Phone Number*" aria-label="phone" />
                    </Grid>
                    <Grid item xs = {5}>
                        <input style = {{marginLeft: "45px", width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Email Address*" aria-label="email" />
                    </Grid>
                </Grid>
                <Grid container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {11}>
                        <input style = {{width: "915px"}} type="number" min = {0} onChange = {handleChange} className="form-control" placeholder="Number of Children*" aria-label="children" />
                    </Grid>
                </Grid>
                <Typography style = {{marginTop: "16px", marginLeft: "30px", fontWeight: "bold"}}> Next of Kin Details </Typography>
                <Divider className = {classes.subDividerStyle}/>
                <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {5}>
                        <input style = {{width: "450px"}}type="text" onChange = {handleChange} className="form-control" placeholder="First Name*" aria-label="first" />
                    </Grid>
                    <Grid item xs = {5}>
                        <input style = {{marginLeft: "45px", width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Last Name*" aria-label="last" />
                    </Grid>
                </Grid>
                <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {5}>
                        <input style = {{width: "450px"}}type="text" onChange = {handleChange} className="form-control" placeholder="Phone Number*" aria-label="phone" />
                    </Grid>
                    <Grid item xs = {5}>
                        <input style = {{marginLeft: "45px", width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Address*" aria-label="address" />
                    </Grid>
                </Grid>
                <Typography style = {{marginTop: "16px", marginLeft: "30px", fontWeight: "bold"}}> Emergency Contact Details </Typography>
                <Divider className = {classes.subDividerStyle}/>
                <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {3}>
                        <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emargency Name 1*" aria-label="emergency name 1" />
                    </Grid>
                    <Grid item xs = {3}>
                        <input style = {{marginLeft: "55px", width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emergency Address 1*" aria-label="emergency address 1" />
                    </Grid>
                    <Grid item xs = {3}>
                        <input style = {{marginLeft: "115px", width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emergency Phone 1*" aria-label="emergency phone 1" />
                    </Grid>
                </Grid>
                <Grid container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {3}>
                        <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emargency Name 2*" aria-label="emergency name 2" />
                    </Grid>
                    <Grid item xs = {3}>
                        <input style = {{marginLeft: "55px", width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emergency Address 2*" aria-label="emergency address 2" />
                    </Grid>
                    <Grid item xs = {3}>
                        <input style = {{marginLeft: "115px", width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emergency Phone 2*" aria-label="emergency phone 2" />
                    </Grid>
                </Grid>
                <Grid className = {classes.gridLink} item xs = {12}>
                    <Link className = {classes.backLinkStyle} to = {{pathname: "/bank", state: {employeeInfo, steps, otherActiveStep}}}> Back </Link>
                    <Link className = {classes.nextLinkStyle} to = 
                    {{
                        pathname: "/remainingdata",
                        state: {bankDetails, employeeInfo, personalData, otherData, otherActiveStep}    
                    }}> 
                        Next <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> </Link>
                </Grid>
                </form>
            </Grid>
        </Paper>
    </Grid>
)}