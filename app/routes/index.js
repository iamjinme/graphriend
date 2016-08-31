'use strict';

var path = process.cwd();
var Graphriend = require(path + '/app/controllers/Graphriend.server.js');
var sess;

module.exports = function (app) {

	function isLoggedIn (req, res, next) {
		sess = req.session;
		if (sess.user || req.url === '/') {
			return next();
		} else {
			res.redirect('/');
		}
	}

	var graPhriend = new Graphriend();

	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.render('main', { user: sess.user, page: 'index' });
		});

	app.post('/api/signup', graPhriend.signUp);
	app.post('/api/login', graPhriend.logIn);
	app.get('/api/logout', graPhriend.logOut);

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
