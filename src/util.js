import axios from 'axios';
import {serverURL, browserURLs} from "./constants";

const checkLoggedIn = () => {
  axios.post(`${serverURL}/api/user_info`, {
    token: localStorage.getItem('jwtToken')
  }).then(res => {
    if (res.status !== 200) {
      window.location.assign(browserURLs.login);
    }
  }).catch(e => {
    window.location.assign(browserURLs.login);
  })
};

export {checkLoggedIn};