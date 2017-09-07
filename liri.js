
//TWITTER! when you type in node liri my-tweets, it needs to print your tweets and the time stamp, quanity= 20

//this will send and receive a request to an API
var request = require("request");

//this will include anything in this folder which are the keys to twitter.
var keys = require("./keys.js");
//talking to the twitter api 
var Twitter = require('twit');

//this variable is calling up the twitter api and using my keys to gain access
var tweet = new Twitter(keys);


//function that will be called by user in the terminal if my-tweets is selected

function tweetAway(){

 tweet.get("statuses/user_timeline", {screen_name:'rexmanningday1', count: 3}), function(error, tweets,  body){
 	if(!error){
 		console.log(error);
	}else{
		console.log(tweets);
		}
	}
}

//OMDB - take a title from the user in terminal and return the title, year, rating
var omdb = require('omdb');
//the function needs to take user input, run the request in omdb and return the parameters above
function movieTime(){

omdb.get()
}

//switch case for the differnt options for liri-bot

switch(action){
	case "my-tweets":
	tweetAway();
	break
	case "movie-title"
	movieTime();
}


// var spotify-this-song
// var movie-this
// var do-what-it-says