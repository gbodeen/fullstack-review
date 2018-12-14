const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const { getReposByUsername } = require('../helpers/github.js');
const { parseGitRepoInfo, retrieve } = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', bodyparser.text(), function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('POSTed username is ' + req.body);
  getReposByUsername(req.body, res, parseGitRepoInfo);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  retrieve((err, results) => {
    res.send(results);
  });
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

