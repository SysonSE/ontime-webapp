'use strict';
var express = require('express'),
	app = express(),
	env = app.get('env'),
	gzippo = require('gzippo');


if ('staging' === env) {
	app.use(express.logger('dev'));
	app.use(express.errorHandler());
	app.use(gzippo.staticGzip(__dirname + '/dist'));
}

if ('production' === env) {
	app.use(gzippo.staticGzip(__dirname + '/dist'));
}

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
	console.log('OnTime webapp listening on port ' + app.get('port'));
});