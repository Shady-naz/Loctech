import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link, useLocation} from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Stepper from "./Stepper";
import styles from "./styles/BankPageStyles";

export default function BankPage () {
const classes = styles();
let location = useLocation ();

const {employeeInfo, personalData, steps, infoActiveStep, otherActiveStep} = location.state;
const [bankActiveStep, setBankActiveStep] = useState(infoActiveStep)
const [bankDetails, setBankDetails] = useState ({
    bankName: "",
    accountNumber: "",
    bvn: "",
    pensionManager: "",
    pensionNumber: ""
});

useEffect(() => {
    if (infoActiveStep !== undefined) {
        return setBankActiveStep((bankActiveStep) => bankActiveStep + 1)
    } else {
        return setBankActiveStep(otherActiveStep - 1 )
    }
}, []);

const handleChange = evt => {
    setBankDetails({...bankDetails, [evt.target.name]: evt.target.value})
}

return (
    <>
        <Navbar />
        <Grid container style = {{ marginLeft: "32px"}}>
            <Grid item xs={12}>
                <Paper className={classes.headerStyle}>
                    <Typography> Add Employee </Typography>
                </Paper>
            </Grid>
            <Sidebar />
            <Paper className = {classes.paperStyle}>
                <Stepper steps = {steps} activeStep = {bankActiveStep} />
                <Divider className = {classes.dividerStyle} />
                <Grid item xs = {12}>
                        <Grid container spcaing = {3}>
                        <Grid className = {classes.gridInputStyle} item xs = {5}>
                            <input  style = {{width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Bank Name*" name = "bankName" aria-label="Bank Name" autoFocus required/>
                        </Grid>
                        <Grid style = {{marginLeft: "25px"}} item xs = {5}>
                            <input style = {{width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Account Number*" name = "accountNumber" aria-label="Account Number" required/>
                        </Grid>
                    </Grid>
                    <Grid style = {{marginBottom: "25px", marginTop: "25px"}} container spcaing = {3}>
                        <Grid className = {classes.gridInputStyle} item xs = {11}>
                            <input style = {{width: "914px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Bank Verification Number*" name = "bvn" aria-label="BVN" required/>
                        </Grid>
                    </Grid>
                    <Grid container spcaing = {2}>
                        <Grid className = {classes.gridInputStyle} item xs = {5}>
                            <input style = {{width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Pension Manager*" name = "pensionManager" aria-label="pension manager" required/>
                        </Grid>
                        <Grid style = {{marginLeft: "25px"}} item xs = {5}>
                            <input style = {{width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Pension Number*" name = "pensionNumber" aria-label="pension number" required/>
                        </Grid>
                    </Grid>
                    <Grid className = {classes.gridLink} item xs = {12}>
                        <Link className = {classes.backLinkStyle} to = {{pathname: "/info", state: {personalData, steps, bankActiveStep}}}> Back </Link>
                        <Link className = {classes.nextLinkStyle} to = 
                            {{
                                pathname: "/otherdata",
                                state: {bankDetails, employeeInfo, personalData, steps, bankActiveStep}
                            }}> 
                            Next <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> 
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </>
)}