var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/warbler');

module.exports.Message = require('./messages');
module.exports.User = require('./user');