'use strict';

var path = process.cwd();
var Graphriend = require(path + '/app/controllers/Graphriend.server.js');
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
		.get(isLoggedIn, graPhriend.showAll);

	// My friends view
	app.route('/my')
		.get(isLoggedIn, graPhriend.showMy);

	// Access API REST
	app.post('/api/signup', graPhriend.signUp);
	app.post('/api/login', graPhriend.logIn);
	app.get('/api/logout', graPhriend.logOut);

	// Friends API REST
	app.route('/api/users/:username/friends')
		.get(isLoggedIn, graPhriend.getFriend)
		.post(isLoggedIn, graPhriend.addFriend)
		.delete(isLoggedIn, graPhriend.delFriend);

};
