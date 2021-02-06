import React, { useState } from "react";
import Sidebar from "./Sidebar";
import EmployeeDataService from "./services/employee";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import {Link, Redirect, useLocation} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Stepper from "./Stepper";
import styles from "./styles/RemainingPageStyles.js";

export default function Lastpage () {
const classes = styles()
let location = useLocation ();

const {bankDetails, employeeInfo, personalData, otherActiveStep} = location.state;
const [remActiveStep] = useState(otherActiveStep)
const [msg, setMsg] = useState ("")
const [add, setAdd] = useState (false)
const [remainingData, setRemainingData] = useState ({
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

function getSteps() {
    return ['Personal Data', 'Employee Info', 'Bank and Pension', 'Other Data'];
    }
    const steps = getSteps();

const handleChange = evt => {
    setRemainingData({...remainingData, [evt.target.name]: evt.target.value})
}

const submitEmployee = async (evt) => {
    evt.preventDefault();
    const data = {
        remainingData, bankDetails, employeeInfo, personalData
    }
    const response = await EmployeeDataService.addEmployee(data)
    setMsg(response.data.msg)
    setAdd(response.data.success)
}

return (
    <Grid container style = {{padding: 16, marginLeft: "32px"}}>
        {add ? (
            <Redirect to = {{
                pathname: "/summary",
                state: { msg, from: location}
            }} />
        ) : (
            <>
                <Grid item xs={12}>
                    <Paper className={classes.headerStyle}>
                        <Typography> Add Employee </Typography>
                    </Paper>
                </Grid>
                <Sidebar newNavStyle = {classes.sideStyle} />
                <Paper className = {classes.paperStyle}>
                    <Grid item xs = {12}>
                        <Stepper steps = {steps} activeStep = {remActiveStep} />
                        <Divider className = {classes.dividerStyle} />
                        <Typography style = {{marginLeft: "30px", fontWeight: "bold"}}> Spouse Details </Typography>
                        <Divider className = {classes.subDividerStyle}/>
                        <form onSubmit = {submitEmployee}>
                        <Grid container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {5}>
                                <input  style = {{ width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Last Name*" name = "lastname" aria-label="Last Name" autoFocus required/>
                            </Grid>
                            <Grid item xs = {5}>
                                <input style = {{marginLeft: "45px", width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder={`First Name*`} name = "firstname" aria-label="First Name" required/>
                            </Grid>
                        </Grid>
                        <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {5}>
                                <input style = {{width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Phone Number*" name = "phone" aria-label="phone" required/>
                            </Grid>
                            <Grid item xs = {5}>
                                <input style = {{marginLeft: "45px", width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Email Address*" name = "address" aria-label="email" required/>
                            </Grid>
                        </Grid>
                        <Grid container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {11}>
                                <input style = {{width: "915px"}} type="number" min = {0} onChange = {handleChange} className="form-control" placeholder="Number of Children*" name = "children" aria-label="children" required/>
                            </Grid>
                        </Grid>
                        <Typography style = {{marginTop: "16px", marginLeft: "30px", fontWeight: "bold"}}> Next of Kin Details </Typography>
                        <Divider className = {classes.subDividerStyle}/>
                        <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {5}>
                                <input style = {{width: "450px"}}type="text" onChange = {handleChange} className="form-control" placeholder="First Name*" aria-label="first" required/>
                            </Grid>
                            <Grid item xs = {5}>
                                <input style = {{marginLeft: "45px", width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Last Name*" aria-label="last" required/>
                            </Grid>
                        </Grid>
                        <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {5}>
                                <input style = {{width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Phone Number*" aria-label="phone" required/>
                            </Grid>
                            <Grid item xs = {5}>
                                <input style = {{marginLeft: "45px", width: "450px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Address*" aria-label="address" required/>
                            </Grid>
                        </Grid>
                        <Typography style = {{marginTop: "16px", marginLeft: "30px", fontWeight: "bold"}}> Emergency Contact Details </Typography>
                        <Divider className = {classes.subDividerStyle}/>
                        <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {3}>
                                <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emargency Name 1*" aria-label="emergency name 1" required/>
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{marginLeft: "55px", width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emergency Address 1*" aria-label="emergency address 1" required/>
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{marginLeft: "115px", width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emergency Phone 1*" aria-label="emergency phone 1" required/>
                            </Grid>
                        </Grid>
                        <Grid container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {3}>
                                <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emargency Name 2*" aria-label="emergency name 2" required/>
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{marginLeft: "55px", width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emergency Address 2*" aria-label="emergency address 2" required/>
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{marginLeft: "115px", width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Emergency Phone 2*" aria-label="emergency phone 2" required/>
                            </Grid>
                        </Grid>
                        <Grid className = {classes.gridLink} item xs = {12}>
                            <Link className = {classes.backLinkStyle} to = {{ pathname: "/otherdata", state: {bankDetails, steps, remActiveStep}}}> Back </Link>
                            <button className = {classes.nextLinkStyle} >
                                Submit <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> 
                            </button>
                        </Grid>
                        </form>
                    </Grid>
                </Paper>
            </>
        )}
    </Grid>
)}

