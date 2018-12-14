const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', () => console.log('Error establishing mongo db connectin.'));
db.once('open', () => console.log('Mongo db connection established successfully.'));


let repoSchema = new mongoose.Schema({
  'id': Number,
  'name': String,
  'owner': String,
  'ownerid': Number,
  'url': String,
  'description': String
});

let Repo = mongoose.model('Repo', repoSchema);

const parseGitRepoInfo = (err, repos) => {
  if (err) {
    console.log('Git Repo parser received error.');
  } else {
    // console.log('Keys of the response repo objects: ' + Object.keys(repos));
    repos.data.map(repo => {

      // if (repo['id']) console.log('repo id', repo.id);
      // if (repo['name']) console.log('repo id', repo.name);
      // if (repo['url']) console.log('repo id', repo.url);
      // if (repo['description']) console.log('repo id', repo.description);
      // if (repo['owner'] && repo.owner['id']) console.log('repo owner id', repo.owner.id);
      // if (repo['owner'] && repo.owner['login']) console.log('repo owner', repo.owner.login);

      let keeper = {
        id: repo.id,
        name: repo.name,
        owner: repo.owner.login,
        ownerid: repo.owner.id,
        url: repo.url,
        description: repo.description
      };

      // console.log('The latest keeper is: ', keeper);
      save(keeper);
    });
  }
}

const save = (upsertablestuff) => {
  // const upsertable = {'id': 1, 'name': 'X', 'owner': 'X', 'ownerid': 1, 'url':'X', 'description':'X'};
  Repo.update({ 'id': upsertablestuff.id }, upsertablestuff, { 'upsert': true }).exec()
    .then(raw => console.log('Update DB results: ' + raw))
    .catch(err => console.log('Update DB error: ' + err));
}

const retrieve = (cb) => {
  Repo.find().exec()
    .then(results => cb(null, results))
    .catch(err => console.log(err));
}

module.exports = {
  save: save,
  retrieve: retrieve,
  parseGitRepoInfo: parseGitRepoInfo
};