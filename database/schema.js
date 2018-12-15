const mongoose = require('mongoose');

const repoSchema = new mongoose.Schema({
  'id': Number,
  'name': String,
  'owner': String,
  'ownerid': Number,
  'url': String,
  'description': String
});

module.exports = repoSchema;