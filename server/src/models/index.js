const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

db.mongoose = mongoose;

db.contact = require("./contact.model");

module.exports = db;