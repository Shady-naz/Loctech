import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./styles/BankPageStyles";
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";

export default function BankPage () {
    const classes = styles()
        return (
            <Grid container spacing={0}>
            <Grid item xs={12}>
                <Paper className={classes.headerStyle}>
                    <Typography> Add Employee </Typography>
                </Paper>
            </Grid>
            <Sidebar newNavStyle = {classes.sideStyle} />
            <Paper className = {classes.paperStyle}>
                <Divider className = {classes.dividerStyle} />
                <Grid item xs = {9}>
                    <Grid container spcaing = {2}>
                        <Grid className = {classes.gridInputStyle} item xs = {6}>
                            <input  style = {{width: "330px"}} type="text" className="form-control" placeholder="Bank Name*" aria-label="Last Name" />
                        </Grid>
                        <Grid style = {{marginLeft: "20px"}} item xs = {5}>
                            <input style = {{width: "330px"}} type="text" className="form-control" placeholder="Account Number*" aria-label="First Name" />
                        </Grid>
                        {/* <Grid style = {{marginLeft: "20px"}} item xs = {1}>
                            <i style = {{display: "inline", minWidth: "80px", padding: "10px"}}><PersonIcon style = {{fontSize: "small"}} /> </i>
                        </Grid> */}
                    </Grid>
                    <Grid style = {{marginBottom: "20px", marginTop: "20px"}} container spcaing = {2}>
                        <Grid className = {classes.gridInputStyle} item xs = {11}>
                            <input style = {{width: "695px"}} type="text" className="form-control" placeholder="Bank Verification Number*" aria-label="BVN" />
                        </Grid>
                    </Grid>
                    <Grid container spcaing = {2}>
                        <Grid className = {classes.gridInputStyle} item xs = {6}>
                            <input style = {{width: "330px"}} type="text" className="form-control" placeholder="Pension Manager*" aria-label="pension manager" />
                        </Grid>
                        <Grid style = {{marginLeft: "20px"}} item xs = {5}>
                            <input style = {{width: "330px"}} type="text" className="form-control" placeholder="Pension Number*" aria-label="pension number" />
                        </Grid>
                    </Grid>
                    <Grid className = {classes.gridLink} item xs = {12}>
                        <Link className = {classes.backLinkStyle} to = "/info"> Back </Link>
                        <Link className = {classes.nextLinkStyle} to = "/otherpage"> Next <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}