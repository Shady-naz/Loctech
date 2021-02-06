import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import SideMenuList from "./Menu"
import styles from "./styles/SidebarStyles";

export default function Sidebar (props) {
    const classes = styles()
    return (
        <Grid item xs={2}>
            <Paper className = {classes.navStyle}>
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                        <Typography className={classes.navItemHeadStyle}> <PersonOutlineOutlinedIcon className = {classes.navHeadIconStyle} /> KINGSOOERP </Typography>
                        <p className={classes.navItemSubHeadStyle}> Head of Department </p>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.navFirstItemStyle}> <PersonOutlineOutlinedIcon className = {classes.navItemIconStyle} /> Lawson Loctech <ArrowDropDownOutlinedIcon /> </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.navItemStyle}> <DashboardIcon /> Dashboard</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <SideMenuList /> 
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.navItemStyle}> <PaymentIcon /> Finance <ArrowDropDownOutlinedIcon /> </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}