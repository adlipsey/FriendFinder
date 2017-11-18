//Data
var friends = require("../data/friends.js");


//Routes to export
module.exports = function(app){
	//API routes
	app.post("/api/friends", function(req, res){
		var newFriend = req.body;
		friends.addFriend(newFriend);
	});

	app.get("/api/friends", function(req, res){
		res.json(friends.allFriends);
	});

};