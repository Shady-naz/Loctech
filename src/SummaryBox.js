import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import GroupIcon from '@material-ui/icons/Group';
import {mainTextStyle, mainStyle} from "./styles/SummaryBoxStyles";

export default function SummaryBox (props) {
    return (
        <Fragment>
            <Grid item xs={4}>
                <Paper style={mainStyle}>  
                    <Typography > 
                         <GroupIcon style = {{color: props.employee.color, marginRight: "300px"}} />
                        {props.employee.name} 
                    </Typography>
                    <Typography style = {mainTextStyle}> {props.employee.number} </Typography>
                    <Divider />
                </Paper>
            </Grid>
        </Fragment>
    )
}