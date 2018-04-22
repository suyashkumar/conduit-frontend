import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '20px',
    padding: '10px',
  }
};

const HomeView = props => {
  return (
    <div style={styles.card}>
      <Card>
        <CardContent>
          <Typography variant="headline" component={"h1"} style={{textAlign: 'center'}}>
            Welcome to Conduit
          </Typography>
          <Typography component="p">
            Conduit allows you to interface with IoT devices like the ESP8266
            quickly and easily from anywhere in the world through a centralized and secure
            web service. The Conduit platform is completely open-source written in Golang
            (backend), ReactJS (frontend), and C++ (firmware library).
          </Typography>
        </CardContent>
        <CardActions>
          <Button size={"small"} color="primary">Login</Button>
          <Button size={"small"} color="primary">Github</Button>
        </CardActions>
      </Card>
    </div>
  )
};

export default HomeView;