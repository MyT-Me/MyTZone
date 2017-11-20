
var scoringMethods = require('../models/scoringMethods')
module.exports = function(app){
    app.get('/scores', function (req, res) {
        scoringMethods.scorer(req,"revanthpenugonda@gmail.com",function(err,responseJson){
            console.log("Score Request Received");
            if (err!=null) {
                res.status(500).send(JSON.stringify({error: err.toString()}));
            } else {
                res.status(200).send(responseJson);
            }
        });
    });
}