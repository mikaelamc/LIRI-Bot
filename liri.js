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
            console.log("Language: " + movieBody.Language);
          
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


const outputs = ['Remember the Titans', 'Taken', 'The Fast and the Furious'];

inquirer.prompt({
    type: 'list',
    name: 'q',
    message: 'What movie would you like watch?',
    choices: [ 'Remember the Titans', 'Taken', 'The Fast and the Furious' ]
  }).then(function(answers) {
    console.log(outputs[+answers.q - 1]);
    searchMovie(answers.q)
  });








//   Spotify THis SONG
//read file for spotify///////
function searchSong(searchValue) {

    // Default search value if no song is given
    if (searchValue == "") {
        searchValue = "The Sign Ace of Base";
    }

    // Accesses Spotify keys  
    var spotify = new Spotify(keys.spotify);

    var searchLimit = "";

    // Allows the user to input the number of returned spotify results, defaults 1 return if no input given
    if (isNaN(parseInt(process.argv[3])) == false) {
        searchLimit = process.argv[3];

        console.log("\nYou requested to return: " + searchLimit + " songs");
        
        // Resets the searchValue to account for searchLimit
        searchValue = "";
        for (var i = 4; i < process.argv.length; i++) {        
            searchValue += process.argv[i] + " ";
        };

    } else {
        console.log("\nFor more than 1 result, add the number of results you would like to be returned after spotify-this-song.\n\nExample: if you would like 3 results returned enter:\n     node.js spotify-this-song 3 Kissed by a Rose")
        searchLimit = 1;
    }
   
    // Searches Spotify with given values
    spotify.search({ type: 'track', query: searchValue, limit: searchLimit }, function(respError, response) {

        fs.appendFile("log.txt", "-----Spotify Log Entry Start-----\nProcessed on:\n" + Date() + "\n\n" + "terminal commands:\n" + process.argv + "\n\n" + "Data Output: \n", errorFunctionStart());

        errorFunction();

        var songResp = response.tracks.items;

        for (var i = 0; i < songResp.length; i++) {
            console.log("\n=============== Spotify Search Result "+ (i+1) +" ===============\n");
            console.log(("Artist: " + songResp[i].artists[0].name));
            console.log(("Song title: " + songResp[i].name));
            console.log(("Album name: " + songResp[i].album.name));
            console.log(("URL Preview: " + songResp[i].preview_url));
            console.log("\n=========================================================\n");

            searchSong(searchValue);

            fs.appendFile("log.txt", "\n========= Result "+ (i+1) +" =========\nArtist: " + songResp[i].artists[0].name + "\nSong title: " + songResp[i].name + "\nAlbum name: " + songResp[i].album.name + "\nURL Preview: " + songResp[i].preview_url + "\n=============================\n", errorFunction());
        }

        fs.appendFile("log.txt","-----Spotify Log Entry End-----\n\n", errorFunctionEnd());
    })
};












// fs.readFile("random.txt", "utf8", function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
  
//   });
  
  
  
  var spotify = new Spotify(keys.spotify);
  
  
  //process.argv is an array of data that we are obtaining from user-input to use in our code
//   var nodeArgs = process.argv;
  
//   console.log(process.argv.length);
  //show if the process.argv will pull. It pulled!!! Yeah!
  
//   Need to fix Spotify and Bands In Town Calls
  































/* Create an HTTP server to handle responses */






// spotify.("https://api.spotify.com/v1/tracks", "utf8", function(err, data){
//   if (err) {
//     return console.log(err);
//   }
// })










