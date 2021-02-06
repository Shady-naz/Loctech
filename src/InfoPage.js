import React, { useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Link, useLocation} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import Stepper from "./Stepper";
import styles from "./styles/InfoPageStyles.js";

export default function InfoPage () {
const classes = styles();
let location = useLocation ();

const {personalData, activeStep, steps, bankActiveStep} = location.state;
const [infoActiveStep, setInfoActiveStep] = useState(activeStep)
const [employeeInfo, setEmployeeInfo] = useState({
    staffId: "", officialemail: "", employmentType: "", employmentDesignation: "", employmentDepartment: "", employeeStatus: "", employeeConfirmation: "", employeeLocation: "", grossSalary: "", dateofemployment: "", dateofdeparture: "",
    refereeDetails: {
        referenceName1: "",
        referenceAddress1: "",
        referencePhone1: "",
        referenceName2: "",
        referenceAddress2: "",
        referencePhone2: "",
    }
})

useEffect(() => {
    if (activeStep !== undefined) {
        return setInfoActiveStep((activeStep) => activeStep + 1);
    } else {
        return setInfoActiveStep(bankActiveStep - 1);
    }
}, [])

const handleChange = evt => {
    setEmployeeInfo({...employeeInfo, [evt.target.name]: evt.target.value})
}

const handleFocus = evt => {
    evt.currentTarget.type = "date"
}

const handleBlur = evt => {
    evt.currentTarget.type = "text";
};


return (
    <>
        <Navbar />
        <Grid container spacing={0} style = {{ marginLeft: "32px"}}>
            <Grid item xs={12}>
                <Paper className={classes.headerStyle}>
                    <Typography> Add Employee </Typography>
                </Paper>
            </Grid>
            <Sidebar newNavStyle = {classes.sideStyle} />
            <Paper className = {classes.paperStyle}>
                <Grid item xs = {12}>
                    <Stepper  steps = {steps} activeStep = {infoActiveStep} />
                <Divider className = {classes.dividerStyle} />
                    <Grid container spcaing = {2}>
                        <Grid style = {{marginLeft: "30px"}} item xs = {6}>
                            <input  style = {{width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Enter Staff ID*" name = "staffId" bel="staff id" autoFocus required/>
                        </Grid>
                        <Grid item xs = {5}>
                            <input style = {{width: "455px"}} type="text" onChange = {handleChange} className="form-control" placeholder= "Office Email" name = "officialemail" ria-label="office email" required/>
                        </Grid>
                    </Grid>
                    <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                        <Grid className = {classes.gridInputStyle} item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Employment Type*" name = "employmentType" aria-label="Employment Type" required/>
                        </Grid>
                        <Grid item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Employment Designation*" name = "employmentDesignation" aria-label="Employment Designation" required/>
                        </Grid>
                        <Grid item xs = {3}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Employment Department*" name = "employmentDepartment" aria-label="Employment Department" required/>
                        </Grid>
                    </Grid>
                    <Grid container spcaing = {1}>
                        <Grid className = {classes.gridInputStyle} item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Employee Status*" name = "employeeStatus" aria-label="Employee status" required/>
                        </Grid>
                        <Grid item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Employee Confirmation*" name = "employeeConfirmation" aria-label="Employee confirmation" required/>
                        </Grid>
                        <Grid item xs = {3}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Employee Location*" name = "employeeLocation" aria-label="Employee location" required/>
                        </Grid>
                    </Grid>
                    <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                        <Grid className = {classes.gridInputStyle} item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Gross Salary*" name = "grossSalary" a-label="gross salary" required/>
                        </Grid>
                        <Grid item xs = {4}>
                            <input style = {{width: "290px"}} onFocus = {handleFocus} onBlur = {handleBlur} onChange = {handleChange} className="form-control" placeholder="Date of Employment*" name = "dateofemployment" aria-label="set date of employment" required/>
                        </Grid>
                        <Grid item xs = {3}>
                            <input style = {{width: "290px"}} onFocus = {handleFocus} onBlur = {handleBlur} onChange = {handleChange} className="form-control" placeholder="Date of Leaving*" name = "dateofdeparture"  aria-label="date of leaving" required/>
                        </Grid>
                    </Grid>
                    <Typography style = {{fontWeight: "bold", marginTop: "45px", marginLeft: "30px"}}> Referee Details </Typography>
                    <Divider style = {{marginLeft: "30px", marginRight: "20px", marginBottom: "2px"}} />
                    <Grid style = {{marginBottom: "10px", marginTop: "20px"}} container spcaing = {1}>
                        <Grid className = {classes.gridInputStyle} item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Reference Name 1*" name = "referenceName1" aria-label="Reference Name 1" required/>
                        </Grid>
                        <Grid item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Reference Address 1*" name = "referenceAddress1" aria-label="Reference Address 1" required/>
                        </Grid>
                        <Grid item xs = {3}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder=" Reference Phone 1*" name = "referencePhone1"  aria-label="Reference Phone 1" required/>
                        </Grid>
                    </Grid>
                    <Grid container spcaing = {1}>
                        <Grid className = {classes.gridInputStyle} item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Reference Name 2*" name = "referenceName2" aria-label="Reference Name 2" required/>
                        </Grid>
                        <Grid item xs = {4}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Reference Address 2*" name = "referenceAddress2" aria-label="Reference Address 2" required/>
                        </Grid>
                        <Grid item xs = {3}>
                            <input style = {{width: "290px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Reference Phone 2*" name = "referencePhone2"  aria-label="Reference Phone 2" required/>
                        </Grid>
                    </Grid>
                    <Grid className = {classes.gridLinks} item xs = {12}>
                        <Link className = {classes.backLinkStyle} to = {{pathname:"/personaldata", state: {steps}}}> Back </Link>
                        <Link className = {classes.nextLinkStyle} to = 
                            {{
                                pathname: "/bank",
                                state: { employeeInfo, personalData, steps, infoActiveStep }
                            }}> 
                            Next <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> 
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </>
)}