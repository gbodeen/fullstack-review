const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  axios({
    method: 'get',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'method': 'GET',
      'User-Agent': 'request',
      'username': 'gbodeen',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));

}

module.exports.getReposByUsername = getReposByUsername;




