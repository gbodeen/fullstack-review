const getReposByUsername = require('../helpers/github');
const { saveNewRepos, retrieveRepos } = require('../database/');

const getUserRepos = async (req, res) => {
  const newRepos = await getReposByUsername(req.body);
  await saveNewRepos(newRepos.data);
  getReposFromDB(req, res);
};

const getReposFromDB = async (req, res) => {
  const allRepos = await retrieveRepos();
  res.status(200).send(allRepos);
}

module.exports = {
  getUserRepos,
  getReposFromDB
}