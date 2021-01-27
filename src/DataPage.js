import Sidebar from "./Sidebar";
import Paper from "@material-ui/core/paper";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from "@material-ui/core/Typography";
import styles from "./styles/DataPageStyle.js";

export default function Datapage () {
    const classes = styles();
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
                    <Grid item xs = {12}>
                        <Grid container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {4}>
                                <input  style = {{width: "280px"}} type="text" className="form-control" placeholder="Last Name*" aria-label="Last Name" />
                            </Grid>
                            <Grid item xs = {4}>
                                <input style = {{width: "280px"}} type="text" className="form-control" placeholder={`First Name*`} aria-label="First Name" />
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{width: "280px"}} type="text" className="form-control" placeholder="Other Name*" aria-label="Other Name" />
                            </Grid>
                        </Grid>
                        <Grid style = {{marginBottom: "30px", marginTop: "30px"}} container spcaing = {2}>
                            <Grid className = {classes.gridInputStyle} item xs = {4}>
                                <input style = {{width: "280px"}} type="text" className="form-control" placeholder="Gender*" aria-label="gender" />
                            </Grid>
                            <Grid item xs = {4}>
                                <input style = {{width: "280px"}} type="text" className="form-control" placeholder="Marital Status*" aria-label="marital status" />
                            </Grid>
                            <Grid  item xs = {3}>
                                <input style = {{width: "280px"}} type="text" className="form-control" placeholder="Personal Email*" aria-label="email" />
                            </Grid>
                        </Grid>
                        <Grid container spcaing = {2}>
                            <Grid className = {classes.gridInputStyle} item xs = {4}>
                                <input style = {{width: "280px"}} type="text" className="form-control" placeholder="Phone Number*" aria-label="phone" />
                            </Grid>
                            <Grid item xs = {4}>
                                <input style = {{width: "280px"}} type="text" className="form-control" placeholder="Set Date of Birth*" aria-label="set date of birth" />
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{width: "280px"}} type="text" className="form-control" placeholder="Nationality*" aria-label="nationality" />
                            </Grid>
                        </Grid>
                        <Grid style = {{marginBottom: "30px", marginTop: "30px"}} container spcaing = {2}>
                            <Grid style = {{marginLeft: "30px"}} item xs = {6}>
                                <input style = {{width: "450px"}}type="text" className="form-control" placeholder="Current Address*" aria-label="current address" />
                            </Grid>
                            <Grid item xs = {5}>
                                <input style = {{width: "450px"}} type="text" className="form-control" placeholder="Permanent Address*" aria-label="permanent address" />
                            </Grid>
                        </Grid>
                        <Grid container spcaing = {2}>
                            <Grid style = {{ marginLeft: "30px"}} item xs = {6}>
                                <input style = {{width: "450px"}} type="text" className="form-control" placeholder="State*" aria-label="state" />
                            </Grid>
                            <Grid item xs = {5}>
                                <input style = {{width: "450px"}} type="text" className="form-control" placeholder="Town*" aria-label="town" />
                            </Grid>
                        </Grid>
                        <Grid className = {classes.gridLink} item xs = {12}>
                            <Link className = {classes.backLinkStyle} to = 
                            {{
                                pathname:"/summary",
                                state: {fromSummary: true}
                            }}> 
                                Back 
                            </Link>
                            <Link className = {classes.nextLinkStyle} to = "/info"> Next <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
    )
}