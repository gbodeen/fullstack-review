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

let save = (upsertablestuff) => {
  // const upsertable = {'id': 1, 'name': 'X', 'owner': 'X', 'ownerid': 1, 'url':'X', 'description':'X'};
  Repo.update({ 'id': id }, upsertablestuff, { 'upsert': true })
}

let retrieve = () => {
  Repo.find();
}

module.exports.save = save;