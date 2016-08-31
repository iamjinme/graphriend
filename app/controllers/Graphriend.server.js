'use strict';

var Users = require('../models/users.js');
var sess;

function Graphriend () {

  // Sign Up
  this.signUp = function(req, res) {
		sess = req.session;
		if (!req.body.name) {
			res.json({error: true, message: 'What is your name?'});
		} else if (!req.body.username) {
			res.json({error: true, message: 'Username is necessary'});
		} else if (!req.body.password) {
			res.json({error: true, message: 'Password its empty, fill this'});
		} else {
			// var user = { 'name': req.body.name, 'email': req.body.username, 'password': req.body.password, 'date': new Date() };
			Users.findOne({ 'username': req.body.username }, function(err, doc) {
				if (err) throw err;
      	if (doc) {
					// User is registered
					res.json({error: true, message: 'Friend registered with this username'});
				} else {
					// Save new user
					var user = new Users({
						'name': req.body.name,
						'username': req.body.username,
					  'password': req.body.password,
					  'date': new Date()
					});
					user.save(function(err, doc) {
        		if(err) throw err;
        		res.json(doc);
      		});
				};
			});
		};
  };


}

module.exports = Graphriend;
