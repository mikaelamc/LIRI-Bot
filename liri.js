require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys");
var fs = require("fs");
var request = require("request");
var inquirer = require("inquirer");

//OMDB variables//
var movieTitle= process.argv[2];
var searchValue = "";

// Process.argv is an array of user input from the command line. Every item in the array is noted by the array
console.log(process.argv);
for(var i = 2; i <process.argv.length; i++){
    console.log(searchValue, process.argv[i]);
    searchValue += process.argv[i]; + " ";

}

function searchMovie(searchValue) {
    console.log(searchValue);
    if (searchValue == ""){
        searchValue = "Mr. Nobody";
    }
    var queryUrl =  "http://www.omdbapi.com/?t=" + searchValue.trim() + "&y=&plot=short&apikey=trilogy";
    
    // Request = Going to the internet
    request(queryUrl, function (error, response, body) {
            // console.log(response.body);
        if (!error && response.statusCode === 200) {
      
            movieBody = JSON.parse(body);
            console.log("\n++++++++++++++++ OMDB Search Results ++++++++++++++++\n");
            console.log("Movie Title: " + movieBody.Title);
            console.log("Year: " + movieBody.Year);
            console.log("IMDB rating: " + movieBody.imdbRating);
            console.log("Actors: " + movieBody.Actors);
            console.log("Plot: " + movieBody.Plot);
            console.log("Rotten Tomatoes Rating: " + movieBody.Ratings[1].Value);
            console.log("Country: " + movieBody.Country);
         
          
//  Invoke, Call, Run - 
        }
      
      });
console.log("Hello");
// Never have a line of code that you don't understand

}
// How to Think Like a Programmer
// Think Like a Compiler
// Calling Function is usually in yellow  with parenthesis
// searchMovie(searchValue);

//OMDB inquirer call//
const outputs = ['Remember-the-Titans', 'Taken', 'The-Fast-and-the-Furious'];

inquirer.prompt({
    type: 'list',
    name: 'Movies',
    message: 'What movie would you like to watch?',
    choices: [ 'Remember the Titans', 'Taken', 'The Fast and the Furious' ]
  }).then(function(answers) {
    console.log(outputs[+answers.q - 1]);
    searchMovie(answers.q)
  });

//read file for spotify///////
fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  
  });
  
  
  
  var spotify = new Spotify(keys.spotify);
  
  
  //process.argv is an array of data that we are obtaining from user-input to use in our code
  var nodeArgs = process.argv;
  
  console.log(process.argv.length);
  //show if the process.argv will pull. It pulled!!! Yeah!
  
  
  































/* Create an HTTP server to handle responses */






// spotify.("https://api.spotify.com/v1/tracks", "utf8", function(err, data){
//   if (err) {
//     return console.log(err);
//   }
// })










