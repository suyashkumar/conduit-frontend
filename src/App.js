import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import HomeView from './HomeView';
import {
  Route,
} from 'react-router-dom';



class App extends Component {

  state = {
      drawerOpen: false,
  };

  toggleDrawer = () => {
      this.setState({drawerOpen: !this.state.drawerOpen});
  };

  render() {
    return (
      <div className="App">
          <AppBar position="static">
              <Toolbar>
                  <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit">
                     Conduit
                  </Typography>
              </Toolbar>
          </AppBar>

          <MenuDrawer
            drawerOpen={this.state.drawerOpen}
            toggleDrawer={this.toggleDrawer} />

        <Route exact path="/" component={HomeView}/>

      </div>
    );
  }
}

export default App;
