'use strict';
var express = require('express'),
	app = express(),
	env = app.get('env');


if ('development' === env) {
	console.log('Eru säker på att du vill köra appen såhär? Kör grunt server eller grunt server:dist istället');
	app.use(express.logger('dev'));
	app.use(express.static(__dirname + '/app'));
}

if ('production' === env) {
	app.use(express.static(__dirname + '/dist'));
}

app.set('port', process.env.PORT || 3000);

app.listen(3000, function(){
	console.log('OnTime webapp listening on port ' + app.get('port'));
});