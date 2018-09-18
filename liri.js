//```js
//require("dotenv").config();
//```

var request = require("request");

var inquirer = require("inquirer");

 // Prompt the user to provide information.

 inquirer.prompt([
 {
    type: "list",
    name: "doingWhat",
    message: "please chose one",
    choices: ["concert-this", "spotify-this-song", "movie-this","do-what-it-says"]
  },
  
    {
      type: "input",
      name: "userInput",
      message: "please tell me what is this?"
    }
  
  //  use then to for asynchrome behavior 
  ]).then(function test(question){
        
    if(question.doingWhat === "concert-this"){
        // enter here API call for concert-this
        //"https://rest.bandsintown.com/artists/" + question.userInput + "/events?app_id=codingbootcamp"`
    
        //  * Name of the venue

        //Venue location

        //Date of the Event (use moment to format this as "MM/DD/YYYY")
        var queryUrl = "https://rest.bandsintown.com/artists/" + question.userInput + "/events?app_id=codingbootcamp";
        console.log(queryUrl);
        console.log(question.userInput);
   request(queryUrl,function(error, response, body){

    // If the request is successful
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("Release Year: " + JSON.parse(body));
    }
  });
    
    
      }

    if(question.doingWhat === "spotify-this-song"){
       
    
    
    // enter here API call for spotify
        //* Artist(s)
     
       // * The song's name
        
        //* A preview link of the song from Spotify
        
        //* The album that the song is from
   
        //* If no song is provided then your program will default to "The Sign" by Ace of Base.



   }

       if(question.doingWhat === "movie-this"){
       

        // * Title of the movie.
       //* Year the movie came out.
       //* IMDB Rating of the movie.
       //* Rotten Tomatoes Rating of the movie.
       //* Country where the movie was produced.
       //* Language of the movie.
       //* Plot of the movie.
       //* Actors in the movie.
       
       var queryUrl = "http://www.omdbapi.com/?t=" + question.userInput + "&y=&plot=short&apikey=trilogy";
            console.log(queryUrl);
            console.log(question.userInput);
       request(queryUrl,function(error, response, body){

        // If the request is successful
        if (!error && response.statusCode === 200) {
      
          // Parse the body of the site and recover just the imdbRating
          // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
          console.log("Release Year: " + JSON.parse(body).Year);
        }
      });
       
       
         // If the request is successful
         //if (!error && response.statusCode === 200) {
       
           // Parse the body of the site and recover just the imdbRating
           // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
          // console.log("Release Year: " + JSON.parse(body).Year);
       
}
    if(question.doingWhat === "do-what-it-says"){
        // enter here API call for do-what-it-says
        // Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
        // It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
        
        // Feel free to change the text in that document to test out the feature for other commands.

}


}
  )
