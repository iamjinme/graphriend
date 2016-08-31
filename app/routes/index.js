'use strict';

var path = process.cwd();
var Graphriend = require(path + '/app/controllers/Graphriend.server.js');
var sess;

module.exports = function (app) {

	function isLoggedIn (req, res, next) {
		sess = req.session;
		if (sess.user) {
			return next();
		} else {
			res.redirect('/');
		}
	}

	var graPhriend = new Graphriend();

	var user = {
		isLogged: false,
		name: 'Jinme',
		username: 'mirabalj'
	}

	app.route('/')
		.get(function (req, res) {
			res.render('main', { user: user, page: 'index' });
		});

	app.post('/api/signup', graPhriend.signUp);

/* Example Authenticated verify
	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.render('main', { user: sess.user, page: 'profile' });
		});
*/

/* Example REST api
	app.route('/friends')
		.get(isLoggedIn, graPhriend.getFriend)
		.post(isLoggedIn, graPhriend.addFriend)
		.delete(isLoggedIn, graPhriend.delFriend);
*/

};
