import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ListAltIcon from '@material-ui/icons/ListAlt';
import StepConnector from '@material-ui/core/StepConnector';

const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
      // left: 'calc(-50% + 16px)',
      // right: 'calc(50% + 16px)',
    },
    active: {
      '& $line': {
        backgroundImage: 
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      }
    },
    completed: {
      '& $line': {
        backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      }
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
  })(StepConnector);
  
  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
    },
    completed: {
      backgroundColor: "green"
    }
  });
  
  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <PersonIcon />,
      2: <InfoIcon />,
      3: <AccountBalanceIcon />,
      4: <ListAltIcon />,
    };
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }
  
  ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
  };
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      transition: "width 1.5s ease"
    }
  }));
  
  export default function CustomizedSteppers(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={props.activeStep} connector={<ColorlibConnector />}>
          {props.steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
  