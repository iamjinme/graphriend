'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name: String,
	email: String,
	password: String,
	date: Date
});

module.exports = mongoose.model('User', User);
