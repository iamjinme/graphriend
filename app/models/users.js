'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name: String,
	username: String,
	password: String,
	date: Date
});

module.exports = mongoose.model('User', User);
