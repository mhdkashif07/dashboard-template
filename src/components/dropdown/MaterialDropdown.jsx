import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";
import { ListItem } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import { ListItemText } from "@mui/material";

const useStyles = makeStyles({
  root: {
    whiteSpace: "unset",
    wordBreak: "break-all"
  },
     customWidth: {
      '& div': {
          // this is just an example, you can use vw, etc.
          width: '60px',
      }
  }
});

const Dropdown = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="dropdown">
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        className={classes.customWidth}
        className={classes.root}
      >
        <MenuList style={{maxWidth: "300px"}} dense>
          <MenuItem>
            <ListItemText inset>Single</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>1.15</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>Double</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon></ListItemIcon>
            Custom: 1.2
          </MenuItem>
          <Divider />

          <MenuItem className={classes.root}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            animi, vitae quasi architecto excepturi in consequuntur qui hic quis
            cupiditate.
          </MenuItem>

          <MenuItem>
            <ListItemText>Add space after paragraph</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Custom spacing...</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Dropdown;
