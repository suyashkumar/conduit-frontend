import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {browserURLs, globalStyles, serverURL} from "../constants";
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {checkLoggedIn} from "../util";
import List, { ListItem, ListItemText } from 'material-ui/List';
import copy from 'copy-to-clipboard';
import Snackbar from 'material-ui/Snackbar';


const styles = {
  form: {
    margin: 'auto',
    marginTop: '10px',
    maxWidth: '250px',
  },
  formButton: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: '10px',
  },
  responseContainer: {
    margin: 'auto',
    marginTop: '10px',
  }
};

class AccountView extends Component {
  state = {
    accountSecret: '',
    snackbarOpen: false,
  };

  componentWillMount() {
    checkLoggedIn();
    axios.post(`${serverURL}/api/user_info`, {
      token: localStorage.getItem('jwtToken')
    }).then(res => {
      if (res.status === 200) {
        this.setState({accountSecret: res.data.account_secret});
      }
    })
  }

  onAccountSecretClick = () => {
    copy(this.state.accountSecret);
    this.setState({snackbarOpen: true});
  }


  render() {
    return (
      <div style={globalStyles.card}>
        <Card>
          <CardContent>
            <Typography variant="headline" component={"h1"} style={{textAlign: 'center'}}>
              Account Information
            </Typography>
            <Typography component="p">
              Here, you can find information about your account, including your account secret, which
              you need to include in your firmware to communicate with conduit.
            </Typography>
            <List>
              <ListItem button onClick={this.onAccountSecretClick}>
                <ListItemText primary="Account Secret (click to copy)" secondary={this.state.accountSecret}/>
              </ListItem>
            </List>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.snackbarOpen}
              autoHideDuration={3000}
              onClose={() => this.setState({snackbarOpen: false})}
              message={"Account Secret Copied!"}/>

          </CardContent>

        </Card>
      </div>
    )
  }
}

export default AccountView;