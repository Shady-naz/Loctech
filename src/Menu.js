import React from 'react';
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import GroupIcon from '@material-ui/icons/Group';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import MenuItem from '@material-ui/core/MenuItem';

export default function SideMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link  to = "/" style = {{color: "black", textDecoration: "none", marginLeft: "13px"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <GroupIcon /> Human Resources <ArrowDropDownOutlinedIcon />
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style = {{backgroundColor: "#009999", padding: 4}} onClick={handleClose}> EM Employee Management </MenuItem>
      </Menu>
    </div>
  );
}
