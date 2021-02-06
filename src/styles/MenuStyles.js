import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
        border: "none",
        background: "none",
        transition: "0.8s ease -in-out"
    },
    menuItem: {
        backgroundColor: "#009999",
        height: "100%",
        padding: 4
     
    }
  }));

  export default useStyles;