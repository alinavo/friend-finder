var friends = require('../data/friends.js');

// ROUTING

module.exports = function (app) {

    // API GET requests
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // API POST requests
    // form submits data to server
    app.post('/api/friends', function (req, res) {


        // Need to calculate difference between user survey and friends list
        // Can you make it choose first match?

        // bestMatch object holds information to match
        // Need to loop through 
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        //Parse survey results
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        // Set totalDifferene to 0 first
        // Then will use to calculate difference between survey results and friends in array 
        var totalDifference = 0;

        // Loop through friends array 
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            // Loop through survey scores
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // Use absolute value and calculate difference between scores
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the sum of differences is less then the differences of the current "best friend match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // resets to be new friend
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }


        // Pushes to database
        friends.push(userData);

        // JSON with match 
        res.json(bestMatch);

    });

}