const request = require('request');
const config = require('../config.js');
const axios = require('axios');
const fs = require('fs');

let getReposByUsername = (username, cb) => {
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
    .then(res => {
      console.log('axios github response received.');
      // // console.log('the response starts off: ', typeof res);
      // // console.log(res);
      // // console.log('!!!! After res consoling.')
      // // console.log('res.data:  ', JSON.stringify(res.data));
      // // console.log('The res is ', JSON.stringify(res));
      // fs.writeFile(__dirname + '/fromgithub.txt', JSON.stringify(res.data), (err) => {
      //   if (err) console.log('writefile error', err);
      // });
      cb(null, res);
    })
    .catch(err => {
      // fs.writeFile(__dirname + '/fromgithubERR.txt', 'testing2 \n' + JSON.stringify(err), (writeErr) => {
      //   if (writeErr) console.log('write err file error', writeErr);
      // });
      console.log('axios github error received.  ', err)
      //cb(err);
    });

}

module.exports.getReposByUsername = getReposByUsername;




