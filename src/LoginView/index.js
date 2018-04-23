import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { serverURL, globalStyles, browserURLs } from "../constants";
import axios from 'axios';

const styles = {
  formStyle: {
    maxWidth: '300px',
    margin: 'auto',
  },
  buttonDivStyle: {
    margin: 'auto',
  },
  button: {
    margin: '5px',
    marginTop: '10px',
  }
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  onInputChange = inputID => e => {
    this.setState({[inputID]: e.target.value});
  };

  onRegister = () => {
    axios.post(`${serverURL}/api/register`, {
      email: this.state.email,
      password: this.state.password,
    }).then(res => {
      if (res.status === 200) {
        //localStorage.setItem('jwtToken', response.data.token);
      } else {
        console.log("Error making Register request");
        console.log(res);
      }
    })

  };

  onLogin = () => {
    axios.post(`${serverURL}/api/login`, {
      email: this.state.email,
      password: this.state.password,
    }).then(res => {
      if (res.status === 200) {
        console.log("Login successful, setting token");
        localStorage.setItem('jwtToken', res.data.token);
        window.location.assign(browserURLs.interact);
      }
    })

  };

  render() {
    return (
      <div style={globalStyles.card}>
          <Card>
            <CardContent>
              <Typography variant="headline" component={"h1"} style={{textAlign: 'center'}}>
                Login
              </Typography>
              <div style={styles.formStyle}>
                <TextField
                  value={this.state.email}
                  label="Username"
                  onChange={this.onInputChange('email')}
                  fullWidth
                />
                <TextField
                  value={this.state.password}
                  label="Password"
                  onChange={this.onInputChange('password')}
                  fullWidth
                  type="password"
                />
                <div style={styles.buttonDivStyle}>
                  <Button color="primary" variant="raised" style={styles.button} onClick={this.onLogin}>
                    Login
                  </Button>
                  <Button color="default" variant="raised" style={styles.button} onClick={this.onRegister}>
                    Register
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    )
  }
}

export default LoginView;