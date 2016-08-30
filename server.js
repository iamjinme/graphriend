'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var session = require('express-session');

require('dotenv').load();

var app = express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));

var mongo_uri = process.env.MONGO_URI || 'mongodb://localhost/test';
mongoose.connect(mongo_uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

	app.use(session({
		secret: 'Graphriend',
		resave: false,
		saveUninitialized: true
	}));

	routes(app);

	var port = process.env.PORT || 8080;
	app.listen(port,  function () {
		console.log('Node.js listening on port ' + port + '...');
	});

});
