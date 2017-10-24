import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com/users/',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Authorization': localStorage.getItem('access_token'),
    'Content-type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  }
});