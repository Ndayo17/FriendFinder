//Linking routes to Data

var friendData 		= require('../data/friends.js');
var path 			= require('path');

//Routing

module.export =function(app){
    app.get("/data/friends",function(req,res){
        res.json(FriendData)
    })
}