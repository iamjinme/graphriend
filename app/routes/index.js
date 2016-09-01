'use strict';

var path = process.cwd();
var moment = require('moment');
var Graphriend = require(path + '/app/controllers/Graphriend.server.js');
var Users = require('../models/users.js');
var sess;

module.exports = function (app) {

	function fromNow(date){
	  return moment(date).fromNow()
	}

	function isLoggedIn (req, res, next) {
		sess = req.session;
		if (sess.user || req.url === '/') {
			return next();
		} else {
			res.redirect('/');
		}
	}

	var graPhriend = new Graphriend();

	// Index view
	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.render('main', { user: sess.user, page: 'index' });
		});

	// All users view
	app.route('/all')
		.get(isLoggedIn, function (req, res) {
			Users
	  	.find({}, { __v: false })
	    .sort({'date': -1})
			.limit(60)
			.exec(function(err, users) {
				res.render('main', { user: sess.user, users: users, page: 'all', fromNow: fromNow });
	   	});
		});

	// My friends view
	app.route('/my')
		.get(isLoggedIn, function (req, res) {
			Users.findOne({ _id: sess.user._id }, { __v: false }, function(err, user) {
				if (err) throw err;
				Users
	  		.find({ username: { $in: user.friends } }, { __v: false })
	    	.sort({'date': -1})
				.limit(60)
				.exec(function(err, friends) {
					res.render('main', { user: sess.user, friends: friends, page: 'my', fromNow: fromNow });
	   		});
			});
		});

	// Access API REST
	app.post('/api/signup', graPhriend.signUp);
	app.post('/api/login', graPhriend.logIn);
	app.get('/api/logout', graPhriend.logOut);

/* Example Authenticated verify
	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.render('main', { user: sess.user, page: 'profile' });
		});
*/

	// Friends API REST
	app.route('/api/users/:username/friends')
		.get(isLoggedIn, graPhriend.getFriend)
		.post(isLoggedIn, graPhriend.addFriend)
		.delete(isLoggedIn, graPhriend.delFriend);

};
