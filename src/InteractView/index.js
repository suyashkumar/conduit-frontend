import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {browserURLs, globalStyles, serverURL} from "../constants";
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import {checkLoggedIn} from "../util";

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

class InteractView extends Component {
  state = {
    deviceName: '',
    functionName: '',
    waitForResponse: true,
    deviceResponse: '',
  };

  componentWillMount() {
    checkLoggedIn();
  }

  onInputChange = inputID => e => {
    this.setState({[inputID]: e.target.value});
  };

  toggleWaitForDevice = () => {
    this.setState({waitForResponse: !this.state.waitForResponse, deviceResponse: ''});
  };

  onExecute = () => {
    axios.post(`${serverURL}/api/call`, {
      token: localStorage.getItem('jwtToken'),
      device_name: this.state.deviceName,
      function_name: this.state.functionName,
      wait_for_device_response: this.state.waitForResponse,
    }).then(res => {
      if (this.state.waitForResponse) {
        this.setState({deviceResponse: res.data.response});
      }
    })
  };

  render() {
    return (
    <div style={globalStyles.card}>
      <Card>
        <CardContent>
          <Typography variant="headline" component={"h1"} style={{textAlign: 'center'}}>
            Interact Tool
          </Typography>
          <Typography component="p">
            You can use this web tool to quickly execute functions on your devices via the
            Conduit API.
          </Typography>
          <div style={styles.form}>
            <TextField
              value={this.state.deviceName}
              label="Device Name"
              onChange={this.onInputChange('deviceName')}
              fullWidth/>
            <TextField
              value={this.state.functionName}
              label="Function (RPC) Name"
              onChange={this.onInputChange('functionName')}
              fullWidth/>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.waitForResponse}
                  onChange={this.toggleWaitForDevice}
                  value="checkedA"
                />
              }
              label="Wait for device response"
            />
            <div style={styles.formButton}>
            <Button color="primary" variant="raised" onClick={this.onExecute}>
              Execute!
            </Button>
            </div>
            {
              this.state.deviceResponse && this.state.waitForResponse && (
                <div style={styles.responseContainer}>
                  <Typography variant="title">
                    Response: {this.state.deviceResponse}
                  </Typography>
                </div>
              )
            }
          </div>
        </CardContent>

      </Card>
    </div>
    )
  }
}

export default InteractView;