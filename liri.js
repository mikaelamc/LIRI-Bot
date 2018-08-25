//var request = require("require");
require("dotenv").config();

//pull the keys.js codes//
var fs = require("fs");
var keys = require("./keys");
var Spotify = require("node-spotify-api");
//console.log(keys.Spotify);

//OMDB variables//
var movieTitle = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&r=&y=&plot=short&apikey=trilogy";


//OMDB inquirer call//

var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([

  {
    type: "input",
    name: "username",
    movieTitle:"",
  
  },

]).then(function() {
console.log("\nYou did it")


});





var request = require("request");

request(queryUrl, function (error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }

});






///read file for spotify///////
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



