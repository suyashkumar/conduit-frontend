import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountBox';
import LoginIcon from '@material-ui/icons/VpnKey';

const MenuDrawer = props => {
  return (

    <Drawer open={props.drawerOpen} onClose={props.toggleDrawer}>
      <div
        tabIndex={0}
        role="button"
        onClick={props.toggleDrawer}
        onKeyDown={props.toggleDrawer}>
        <List
          component="nav"
          subheader={<ListSubheader>Conduit Menu</ListSubheader>}>

          <ListItem button>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountIcon/>
            </ListItemIcon>
            <ListItemText primary="Account"/>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LoginIcon/>
            </ListItemIcon>
            <ListItemText primary="Login"/>
          </ListItem>

        </List>
      </div>
    </Drawer>

  );
};

export default MenuDrawer;