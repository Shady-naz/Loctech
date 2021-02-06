import React, {useContext} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import {Link, useLocation} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import SummaryBox from "./SummaryBox";
import Sidebar from "./Sidebar";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { authContext } from "./ProvideAuth";
import AuthMessage from "./AuthMessage";
import FlashMessage from "react-flash-message";
import Navbar from "./Navbar";
import useStyles from "./styles/EmployeeSummaryStyles";

export default function EmployeeSummary() {
    const auth = useContext (authContext);
    const classes = useStyles();
    let location = useLocation ();
    let {from, msg} = location.state
    
    const employeeObject = {
        totalEmployees: {name: "Total Employees", number: 36, color: "#5bb9de"},
        currentEmployees: {name: "Current Employees", number: 36, color: "#5bb9de"},
        pendingEmployees: {name: "Pending Employees", number: 0, color: "#5bb9de"},
        KGMDirectEmployees: {name: "KGM Direct Employees", number: 5, color: "#5bde92"},
        temporaryEmployees: {name: "Temporary Employees", number: 1, color: "#5bde92"},
        NYSCEmployees: {name: "NYSC Employees", number: 0, color: "#5bde92"},
        expartriateEmployees: {name: "Expartriate Employees", number: 0, color: "#5bde92"},
        consultantEmployees: {name: "Consultant Employees", number: 0, color: "#5bde92"},
        SIWESEmployees: {name: "SIWES Employees", number: 0, color: "#5bde92"}
    }

    const employee = Object.keys(employeeObject)
        return (
            <div className = {classes.employeeFrag}>
                 { (from.pathname === "/personaldata" || from.pathname === "/remainingdata")  ? 
                    <FlashMessage duration = {3000}> <AuthMessage> { msg }</AuthMessage> </FlashMessage> 
                     : <FlashMessage duration = {3000}> <AuthMessage> Logged In as {auth.user.username}, Cheers </AuthMessage> </FlashMessage> 
                 }
                  <Navbar />
                <Grid container spacing={3}>
                    <Grid item></Grid>
                    <Sidebar />
                    <Grid item xs={9}>
                        <Grid item xs={12} className = {classes.employeeHeaderGrid}>
                            <Paper className={classes.employeeHeader}>
                                <Typography> 
                                    Employee Summary 
                                </Typography>
                            </Paper>
                        </Grid>
                        <Paper className = {classes.employeePaperGrid}>
                            <Grid item xs={3}>
                                <Paper className={classes.employeeLink}>
                                    <Link style = {{textDecoration: "none", color: "white"}} to = "/personaldata"> 
                                        Add Employee <PersonAddIcon /> 
                                    </Link>
                                </Paper>
                            </Grid>
                            <Divider className = {classes.employeeDivider} />
                            <Grid container spacing={2}>
                                {employee.map((emp, i) => (
                                    <SummaryBox key = {i} employee = {employeeObject[emp]} />
                                ))}
                            </Grid>
                        </Paper>    
                    </Grid>
                </Grid>
            </div>
        );
    }