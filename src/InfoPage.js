import Sidebar from "./Sidebar";
import Paper from "@material-ui/core/paper";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from "@material-ui/core/Typography";
import styles from "./styles/DataPageStyle.js";

export default function InfoPage () {
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
                        <Grid container spcaing = {2}>
                            <Grid style = {{marginLeft: "30px"}} item xs = {6}>
                                <input  style = {{width: "450px"}} type="text" className="form-control" placeholder="Enter Staff ID*" aria-label="staff id" />
                            </Grid>
                            <Grid item xs = {5}>
                                <input style = {{width: "455px"}} type="text" className="form-control" placeholder= "Office Email" aria-label="office email" />
                            </Grid>
                        </Grid>
                        <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Employment Type*" aria-label="Employment Type" />
                            </Grid>
                            <Grid item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Employment Designation*" aria-label="Employment Designation" />
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Employment Department*" aria-label="Employment Department" />
                            </Grid>
                        </Grid>
                        <Grid container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Employment Status*" aria-label="Employment status" />
                            </Grid>
                            <Grid item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Employment Confirmation*" aria-label="Employment confirmation" />
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Employment Location*" aria-label="Employment location" />
                            </Grid>
                        </Grid>
                        <Grid style = {{marginBottom: "10px", marginTop: "10px"}} container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Gross Salary*" aria-label="gross salary" />
                            </Grid>
                            <Grid item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Set Date of Employment*" aria-label="set date of employment" />
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Set Date of Leaving*" aria-label="date of leaving" />
                            </Grid>
                        </Grid>
                        <Grid style = {{marginBottom: "10px", marginTop: "20px"}} container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Reference Name 1*" aria-label="Reference Name 1" />
                            </Grid>
                            <Grid item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Reference Address 1*" aria-label="Reference Address 1" />
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder=" Reference Phone 1*" aria-label="Reference Phone 1" />
                            </Grid>
                        </Grid>
                        <Grid container spcaing = {1}>
                            <Grid className = {classes.gridInputStyle} item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Reference Name 2*" aria-label="Reference Name 2" />
                            </Grid>
                            <Grid item xs = {4}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Reference Address 2*" aria-label="Reference Address 2" />
                            </Grid>
                            <Grid item xs = {3}>
                                <input style = {{width: "290px"}} type="text" className="form-control" placeholder="Reference Phone 2*" aria-label="Reference Phone 2" />
                            </Grid>
                        </Grid>
                        <Grid className = {classes.gridLink} item xs = {12}>
                            <Link className = {classes.backLinkStyle} to = "/personaldata"> Back </Link>
                            <Link className = {classes.nextLinkStyle} to = "/otherdata"> Next <ArrowForwardIosIcon style = {{fontSize: "medium"}} /> </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
    )
}