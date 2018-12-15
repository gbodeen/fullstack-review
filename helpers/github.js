const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = async (username) => {
  const results = await axios.get(`https://api.github.com/users/${username}/repos`,
    {
      'headers': {
        'Authorization': `token ${config.TOKEN}`,
      }
    });
  return results;
}

module.exports = getReposByUsername;




