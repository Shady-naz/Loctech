import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import SummaryBox from "./SummaryBox";
import Sidebar from "./Sidebar";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FlashMessage from "react-flash-message";
import {headerStyle, mainLinkStyle, paperStyle} from "./styles/EmployeeSummaryStyles";

export default function EmployeeSummary(props) {
    
    const employeeObject = {
        totalEmployees: {name: "Total Employees", number: 36, color: "blue"},
        currentEmployees: {name: "Current Employees", number: 36, color: "blue"},
        pendingEmployees: {name: "Pending Employees", number: 0, color: "blue"},
        KGMDirectEmployees: {name: "KGM Direct Employees", number: 5, color: "green"},
        temporaryEmployees: {name: "Temporary Employees", number: 1, color: "green"},
        NYSCEmployees: {name: "NYSC Employees", number: 0, color: "green"},
        expartriateEmployees: {name: "Expartriate Employees", number: 0, color: "green"},
        consultantEmployees: {name: "Consultant Employees", number: 0, color: "green"},
        SIWESEmployees: {name: "SIWES Employees", number: 0, color: "green"}
    }

    const employee = Object.keys(employeeObject)
        return (
            <Paper style={paperStyle}>
                <Grid container spacing={3}>
                    <FlashMessage duration = {3000}> <h1> {props.location.state.msg} </h1> </FlashMessage>    
                    <Grid item xs={12}>
                     <Link to = "/"> <ArrowBackIosIcon style = {{fontSize: "large", width: "50px", height: "25px", color: "black"}} /> </Link>
                        <Paper style={headerStyle}>
                        <Typography> Employee Summary </Typography>
                        </Paper>
                    </Grid>
                    <Sidebar />
                    <Grid item xs={9}>
                        <Grid item xs={2}>
                            <Paper style={mainLinkStyle}>
                                <Link style = {{textDecoration: "none", color: "white"}} to = "/personaldata"> 
                                    Add Employee <PersonAddIcon /> 
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid container spacing={2}>
                            {employee.map((emp, i) => (
                                <SummaryBox key = {i} employee = {employeeObject[emp]} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }