const mongoose = require('mongoose');
// const Promise = require('bluebird');
mongoose.Promise = global.Promise;



mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

const Repo = mongoose.model('repo', require('./schema'));

const saveNewRepos = async (arrayOfRepos) => {
  return await Promise.all(
    arrayOfRepos.map(repo => saveOneRepo({
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      ownerid: repo.owner.id,
      url: repo.url,
      description: repo.description
    }))
  );
}

const saveOneRepo = async (repo) => {
  return await Repo.update({ id: repo.id }, repo, { upsert: true });
}

const retrieveRepos = async () => {
  return await Repo.find({}, [], { limit: 25, sort: { owner: 1, id: 1 } });
}

module.exports = {
  retrieveRepos,
  saveNewRepos
};