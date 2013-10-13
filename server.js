'use strict';
var express = require('express'),
	app = express(),
	env = app.get('env');


if ('staging' === env) {
	app.use(express.logger('dev'));
	app.use(express.errorHandler());
	app.use(express.static(__dirname + '/dist'));
}

if ('production' === env) {
	app.use(express.static(__dirname + '/dist'));
}

app.set('port', process.env.PORT || 3000);

app.listen(3000, function(){
	console.log('OnTime webapp listening on port ' + app.get('port'));
});