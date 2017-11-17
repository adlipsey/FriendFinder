//Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var htmlRoute = require("./app/routing/htmlRoutes.js");
var apiRoute = require("./app/routing/apiRoutes.js");

//Set up Express
var app = express();
var PORT = 8080;

//Set up bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Link external route files
app.use("/", htmlRoute);
app.use("/survey", htmlRoute);
app.use("/api/friends", apiRoute);

//Console log listener @ PORT
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});