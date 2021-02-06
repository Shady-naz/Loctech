import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import GroupIcon from '@material-ui/icons/Group';
import useStyles from "./styles/SummaryBoxStyles";

export default function SummaryBox (props) {
    const classes = useStyles(props)
    
    return (
        <Fragment>
            <Grid item xs={4}>
                <Paper className = {classes.boxIconPaper}> 
                    <GroupIcon className = {classes.boxIcon} /> 
                </Paper>
                <Paper className={classes.boxPaper}>  
                    <Typography> 
                        {props.employee.name} 
                    </Typography>
                    <Typography className = {classes.boxText}> {props.employee.number} </Typography>
                    <Divider />
                </Paper>
            </Grid>
        </Fragment>
    )
}