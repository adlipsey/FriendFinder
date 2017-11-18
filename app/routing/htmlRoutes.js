var path = require("path");

//Routes to export
module.exports = function(app){
	//Routes to html
	app.get("/", function(req,res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/assets/images/ignasi.png", function(req, res){
		res.sendFile(path.join(__dirname, "../assets/images/ignasi.png"));
	});

	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

};