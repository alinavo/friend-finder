//NPM packages to install
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express server
var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// JSON Parse middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Route files for user request
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//listener event
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
