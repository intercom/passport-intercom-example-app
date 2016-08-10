var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  name: String,
  someID: String,
  accessToken: String,
  imageUrl: String,
  email: String
});

User.plugin(findOrCreate);


module.exports = mongoose.model('users', User);
