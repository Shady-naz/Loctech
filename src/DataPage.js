import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Link, useLocation} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import Stepper from "./Stepper";
import styles from "./styles/DataPageStyles.js";

export default function Datapage () {
const classes = styles();
let location = useLocation ();

const [personalData, setPersonalData] = useState({
    lastname: "", firstname: "", othername: "", gender: "", maritalStatus: "", email: "", phone: "", dateofbirth: "", nationality: "", currentAddress: "", permanentAddress: "", state: "", town: ""
})

const [activeStep] = useState(0)

const getSteps = () => {
    return ['Personal Data', 'Employee Info', 'Bank and Pension', 'Other Data'];
  }

const steps = getSteps();

const handleChange = evt => {
    setPersonalData({...personalData, [evt.target.name]: evt.target.value})
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
        <Grid container style = {{ marginLeft: "32px"}}>
            <Grid item xs={12}>
                <Paper className={classes.headerStyle}>
                    <Typography> Add Employee </Typography>
                </Paper>
            </Grid>
            <Sidebar />
            <Grid item xs = {8}>
                <Paper className = {classes.paperStyle}>
                    <Grid item xs = {12}>
                        <Stepper  steps = {steps} activeStep = {activeStep} />
                        <Divider className = {classes.dividerStyle} />
                        <form>
                            <Grid container spcaing = {1}>
                                <Grid className = {classes.gridInputStyle} item xs = {4}>
                                    <input  style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Last Name*" name = "lastname" aria-label="Last Name" autoFocus required/>
                                </Grid>
                                <Grid item xs = {4}>
                                    <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder={`First Name*`} name = "firstname" aria-label="First Name" required/>
                                </Grid>
                                <Grid item xs = {3}>
                                    <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Other Name*" name = "othername" aria-label="Other Name" required/>
                                </Grid>
                            </Grid>
                            <Grid style = {{marginBottom: "30px", marginTop: "30px"}} container spcaing = {2}>
                                <Grid className = {classes.gridInputStyle} item xs = {4}>
                                    <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Gender*" name = "gender" aria-label="gender" required/>
                                </Grid>
                                <Grid item xs = {4}>
                                    <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Marital Status*" name = "maritalStatus" aria-label="marital status" required />
                                </Grid>
                                <Grid  item xs = {3}>
                                    <input style = {{width: "300px"}} type="email" onChange = {handleChange}  className="form-control" placeholder="Personal Email*" name = "email" aria-label="email" required/>
                                </Grid>
                            </Grid>
                            <Grid container spcaing = {2}>
                                <Grid className = {classes.gridInputStyle} item xs = {4}>
                                    <input style = {{width: "300px"}} type="tel" onChange = {handleChange} className="form-control" placeholder="Phone Number*" name = "phone" aria-label="phone" required/>
                                </Grid>
                                <Grid item xs = {4}>
                                    <input style = {{width: "300px"}} onFocus = {handleFocus} onBlur = {handleBlur} placeholder = "Date of Birth*" onChange = {handleChange} className="form-control" name = "dateofbirth" aria-label="set date of birth" required />
                                </Grid>
                                <Grid item xs = {3}>
                                    <input style = {{width: "300px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Nationality*" name = "nationality" aria-label="nationality" required />
                                </Grid>
                            </Grid>
                            <Grid style = {{marginBottom: "30px", marginTop: "30px"}} container spcaing = {2}>
                                <Grid style = {{marginLeft: "25px"}} item xs = {6}>
                                    <input style = {{width: "470px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Current Address*" name = "currentAddress" aria-label="current address" required/>
                                </Grid>
                                <Grid item xs = {5}>
                                    <input style = {{width: "470px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Permanent Address*" name = "permanentAddress" aria-label="permanent address" required/>
                                </Grid>
                            </Grid>
                            <Grid container spcaing = {2}>
                                <Grid style = {{ marginLeft: "25px"}} item xs = {6}>
                                    <input style = {{width: "470px"}} type="text" onChange = {handleChange} className="form-control" placeholder="State*" name = "state" aria-label="state" required/>
                                </Grid>
                                <Grid item xs = {5}>
                                    <input style = {{width: "470px"}} type="text" onChange = {handleChange} className="form-control" placeholder="Town*" name = "town" aria-label="town" required/>
                                </Grid>
                            </Grid>
                            <Grid className = {classes.gridLinks} item xs = {12}>
                                <Link className = {classes.backLinkStyle} to = 
                                {{
                                    pathname:"/summary",
                                    state: {from: location}
                                }}> 
                                    Back 
                                </Link>
                                <Link className = {classes.nextLinkStyle} to = 
                                {{
                                    pathname: "/info",
                                    state: { personalData, steps, activeStep}
                                }} > 
                                Next <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> 
                                </Link>
                            </Grid>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </>
)}