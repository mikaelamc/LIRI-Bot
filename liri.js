require("dotenv").config();

// To use what we have installed, we have to require the file and create a variable
var keys = require("./keys");
var Spotify = require("node-spotify-api");
// console.log(keys.spotify);


var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// Constructors - Are functions ; Are dark green with a Capital letter when used with "New" ; Running constructors you will use "New; "
// New Key Word - Instantiates aka creates a copy of the spotify object; A constructor function creates a new object;
// Constructors are blue prints that creates copies of itself



var nodeArgs = process.argv;
// process.argv is an array
console.log(process.argv.length);
// Obtaining user input into our code
console.log(nodeArgs[3]);




/* Create an HTTP server to handle responses */



// var output = data.split (",");

// for(var i = 0; i <output.length; i++){
//   console.log(output[i]);
// }


// var http = require("http");
// 
/* Create an HTTP server to handle responses */

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);






// // Get Elvis' albums
// spotify.searchtracks('43ZHCT0cAZBISjO8DG9PnE').then(
//     function(data) {
//       console.log('track', data.body);
//     },
//     function(err) {
//       console.error(err);
//     }
//    );



// var nodeArgs = process.argv;

// var song = "";


// for (var i = 2; i <nodeArgs.length; i++){
//     if (i > 2 && i <nodeArgs.length) {
//         song = song + spotify + nodeArgs[i];
//     }
// }



// console.log(queryURL);

// request (queryURL, function (error, response, body){

//     if (!error && response.statusCode === 200){
//         console.log("Song: " + JSON.parse(body).song);
//         }
// });