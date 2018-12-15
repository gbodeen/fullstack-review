const getReposByUsername = require('../helpers/github');
const { saveNewRepos, retrieveRepos } = require('../database/');

module.exports = {
  getUserRepos: async (req, res) => {
    const newRepos = await getReposByUsername(req.body);
    await saveNewRepos(newRepos.data);
    const allRepos = await retrieveRepos();
    res.status(200).send(allRepos);
  },

  getReposFromDB: async (req, res) => {
    const allRepos = await retrieveRepos();
    res.status(200).send(allRepos);
  }
}