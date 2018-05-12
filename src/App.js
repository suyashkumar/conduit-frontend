import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import HomeView from './HomeView';
import LoginView from './LoginView';
import InteractView from './InteractView';
import AccountView from './AccountView';
import {
  Route,
} from 'react-router-dom';
import { GithubIcon } from './icons';
import {githubURL} from "./constants";

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
                <a
                  href={githubURL}
                  target="_blank"
                  style={{position: 'absolute', right: '15px'}}>
                  <IconButton>
                    <GithubIcon style={{color: "white"}}/>
                  </IconButton>
                </a>
              </Toolbar>
          </AppBar>

          <MenuDrawer
            drawerOpen={this.state.drawerOpen}
            toggleDrawer={this.toggleDrawer} />

        <Route exact path="/" component={HomeView}/>
        <Route exact path="/login" component={LoginView}/>
        <Route exact path="/interact" component={InteractView}/>
        <Route exact path="/account" component={AccountView}/>

      </div>
    );
  }
}

export default App;
