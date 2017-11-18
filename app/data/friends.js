
//Export array of friend objects and function to add a friend
module.exports.allFriends = [
{
	"name": "Capt Placeholder",
	"photo": "http://via.placeholder.com/300?text=Placeholder.com+rocks!",
	"scores": [5,4,3,2,1,2,3,4,5,1],

}
];
module.exports.addFriend = function(val){module.exports.allFriends.push(val);};