const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;