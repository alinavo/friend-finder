//NPM install path
var path = require('path');

module.exports = function(app){

//HTML get requests
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

//makes defualt home.html page
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}