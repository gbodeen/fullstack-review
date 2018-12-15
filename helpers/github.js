const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = async (username) => {
  // console.log('Inside the getReposByUsername fn. ', username);
  const results = await axios.get(`https://api.github.com/users/${username}/repos`,
    {
      'headers': {
        'Authorization': `token ${config.TOKEN}`,
      }
    })
    .then(results => results)
    .catch(err => err);
  // console.log('Axios results: ', results);
  return results;
}

module.exports = getReposByUsername;




