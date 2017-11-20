'use strict';
var parameters = require('../strings/apiStrings');
var getters = require('../models/getMethods');
var verifier = require('../strings')('apiVerfier').getVerifier;
var auth = require('../authentication/authjwt');
var scoringMethods = require('../models/scoringMethods')

//This Single Function Can solve for all the getter Methods
module.exports = function (app) {
    app.get('/api/:id', auth ,function (req,res) {
        console.log("Getter API Request Received");
        if(req.params === 0) {
          res.status(422).send();
          return;
        }
        var requestId = req.params.id;
        if(verifier.has(requestId)){
            if(requestId === parameters.SCORES) {
                if(!req.user){
                    res.status(500).send(JSON.stringify({error: "No User Found"}));
                    return;
                    }
                var userEmail = req.user.email;
                scoringMethods.scorer(req, userEmail, function (err, responseJson) {
                    console.log("Score Request Received");
                    if (err!=null) {
                        res.status(500).send(JSON.stringify({error: err.toString()}));
                    } else {
                        res.status(200).send(responseJson);
                    }
                });
            } else {
                getters.getDeeds(req, requestId, function (err, deedData) {
                    if(err !==null){
                        console.log(err);
                        res.status(500).send(JSON.stringify({error: err.toString()}));
                    } else {
                        res.status(200).send(deedData);
                    }
                })
            }
        } else {
            res.status(404).send();
        }
    });
};
