
//Export array of friend objects and function to add a friend
module.exports.allFriends = [
{
	name: "Capt Placeholder",
	photo: "http://via.placeholder.com/300?text=Placeholder.com+rocks!",
	scores: [5,4,3,2,1,2,3,4,5,1]
},
{
	name: "Hannibal Lecter",
	photo: "http://vignette3.wikia.nocookie.net/the-silence-of-the-lambs/images/5/55/Hannibal_2.jpg/revision/latest?cb=20140318232628",
	scores: [1,5,5,5,2,1,1,3,5,5]
},
{
	name: "Pippy Longstockings",
	photo: "https://i.pinimg.com/736x/cd/d2/bd/cdd2bd07e3de296c546d0d802e0f9ded--pippi-longstocking-jeunesse.jpg",
	scores: [5,1,5,1,5,1,5,4,1,3]
}
];
module.exports.findFriend = function(val){
	var friends = module.exports.allFriends;
	var compare = val.scores;
	var friendDiff = [];
	var scoreDiff;
	var lowestDiff = 0;
	var indexFriend = 0;
	//Iterate through allFriends array
	for(var prsn in friends){
		scoreDiff = 0;
		//Iterate through each persons scores and get difference from user scores
		for(var i = 0; i < compare.length; i++){
			scoreDiff += Math.abs(compare[i] - friends[prsn].scores[i]);
		}
		//Push total score difference to array
		friendDiff.push(scoreDiff);
	}
	//Find lowest score difference
	lowestDiff = Math.min.apply(null, friendDiff);
	//Index of lowest score will be friend match
	indexFriend = friendDiff.indexOf(lowestDiff);
	//Add current user to list of friends
	friends.push(val);
	//Return the closest friend match
	return friends[indexFriend];
};