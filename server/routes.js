const express = require('express');
const router = express.Router();
const { getUserRepos, getReposFromDB } = require('./controllers');

router.route('/repos')
  .post(getUserRepos)
  .get(getReposFromDB);

module.exports = router;