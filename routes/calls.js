/**
 * Created by Arash on 1/9/16.
 */
//twitter callback

// this runs if the GET request doesnt work
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};

//this runs if the get request works
var getFeed = function (data) {
    //console.log(data);
    homeFeed = JSON.parse(data);



    //console.log("---------------First Post----------------");
    //console.log(homeFeed[0]);
    //console.log();
    //console.log("--------First 10 posts on Newsfeed--------");
    //console.log(homeFeed);
};

//Includes the Twitter Library
var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
//different for every person
var config = {
    "consumerKey": "8O4Q8Ve0Q7zOtfSVGUL3BgjE9",
    "consumerSecret": "PGBomq993MlJqaVFLh8tcwgEtO0XLhvEXv9cpMj4MBWvJxJhFZ",
    "accessToken": "4756383797-wEwcZ5sHmio2kSKwuCDcT1rWrLSoSAnpU3BotSH",
    "accessTokenSecret": "RKHFJkELaVKvPC2YBraTWXJYqysGg8pzXOC4rtq97mUA2",
    "callBackUrl": "http://localhost:3000/"
};

var twitter = new Twitter(config);


twitter.getHomeTimeline({ count: '10'}, error, getFeed);

