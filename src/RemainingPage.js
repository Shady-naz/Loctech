import Sidebar from "./Sidebar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from "./styles/RemainingPageStyles.js";

export default function Lastpage () {
    const classes = styles()
    return (
        <Paper className = {classes.mainPaperStyle}>
        <Grid container spacing={0}>
        <Grid item xs={12}>
            <Paper className={classes.headerStyle}>
                <Typography> Add Employee </Typography>
            </Paper>
        </Grid>
        <Sidebar newNavStyle = {classes.sideStyle} />
        <Paper className = {classes.paperStyle}>
            <Divider className = {classes.dividerStyle} />
            <Grid item xs = {12}>
                <Grid container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {6}>
                        <input  style = {{width: "450px"}} type="text" className="form-control" placeholder="Last Name*" aria-label="Last Name" />
                    </Grid>
                    <Grid item xs = {5}>
                        <input style = {{width: "450px"}} type="text" className="form-control" placeholder={`First Name*`} aria-label="First Name" />
                    </Grid>
                </Grid>
                <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {6}>
                        <input style = {{width: "450px"}} type="text" className="form-control" placeholder="Phone Number*" aria-label="phone" />
                    </Grid>
                    <Grid item xs = {5}>
                        <input style = {{width: "450px"}} type="text" className="form-control" placeholder="Email Address*" aria-label="email" />
                    </Grid>
                </Grid>
                <Grid container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {11}>
                        <input style = {{width: "955px"}} type="text" className="form-control" placeholder="Number of Children*" aria-label="children" />
                    </Grid>
                </Grid>
                <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {6}>
                        <input style = {{width: "450px"}}type="text" className="form-control" placeholder="First Name*" aria-label="first" />
                    </Grid>
                    <Grid item xs = {5}>
                        <input style = {{width: "450px"}} type="text" className="form-control" placeholder="Last Name*" aria-label="last" />
                    </Grid>
                </Grid>
                <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {6}>
                        <input style = {{width: "450px"}}type="text" className="form-control" placeholder="Phone Number*" aria-label="phone" />
                    </Grid>
                    <Grid item xs = {5}>
                        <input style = {{width: "450px"}} type="text" className="form-control" placeholder="Address*" aria-label="address" />
                    </Grid>
                </Grid>
                <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {4}>
                        <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Emargency Name 1*" aria-label="emergency name 1" />
                    </Grid>
                    <Grid item xs = {4}>
                        <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Emergency Address 1*" aria-label="emergency address 1" />
                    </Grid>
                    <Grid item xs = {3}>
                        <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Emergency Phone 1*" aria-label="emergency phone 1" />
                    </Grid>
                </Grid>
                <Grid container spcaing = {1}>
                    <Grid className = {classes.gridInputStyle} item xs = {4}>
                        <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Emargency Name 2*" aria-label="emergency name 2" />
                    </Grid>
                    <Grid item xs = {4}>
                        <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Emergency Address 2*" aria-label="emergency address 2" />
                    </Grid>
                    <Grid item xs = {3}>
                        <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Emergency Phone 2*" aria-label="emergency phone 2" />
                    </Grid>
                </Grid>
                <Grid className = {classes.gridLink} item xs = {12}>
                    <Link className = {classes.backLinkStyle} to = "/otherdata"> Back </Link>
                    <Link className = {classes.nextLinkStyle} to = "/"> Submit <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> </Link>
                </Grid>
            </Grid>
        </Paper>
    </Grid>
    </Paper>
    )
}

