// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');

// Then the express object is instantiated
var app = express();

// One way to configure Express.js settings is to use app.set(), with the name of the setting and the value
app.set('appName', 'hello-world');

// port: a number on which our server should listen to requests
app.set('port', process.env.PORT || 3000);

// views: absolute path to the folder with template(views)
app.set('views', path.join(__dirname, 'views'));

// view engine: file extension for the template files(jade.html)
app.set('view engine', 'jade');

// Middleware is the backbone of the Express.js framework and it comes in to flavors:
// Defined in external(third-party) modules such as bodyParser.json from Connect/Express.js body-parser:app.use(bodyParser.json())
// Defined in the app or its modules, such as app.use(function(req,res, next)){...}
// Is a way to organize and reuse code, and, essentially, it is nothing more than a function with three parameters:
// request, response, and next

// A single route is rendered with a wildcard to catch requests of all methods on all urls
app.all('*', function(req,res){
	// The res.render has the folloing parameters:
	// viewName: a template with filename extension 
	// data: an optional object that is passed as locals, like a variable from Jade
	// callback: an optional function that is called with an error and HTML hen compilation is complete
	res.render(
		'index',
		{msg: 'Welcome to the Practical Node.js!'}
	);
});

// if res.render is invoked, it will call red.end() which ends/completes the response
// The middleware doesn´t proceed after res.render

// To start the server, is with the core http module and its createServer method
// In this method the system passes the Express.js app object ith all the settings and routes
http
	.createServer(app)
	.listen(app.get('port'),
	function() {
		console.log('Express server listening on port ' + app.get('port')
		);
	}
);

