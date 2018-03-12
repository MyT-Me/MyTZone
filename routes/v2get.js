'use strict';
var parameters = require('../strings/apiStrings');
var getters = require('../models/getMethods');
var verifier = require('../strings')('apiVerfier').getVerifier;
var auth = require('../authentication/authjwt');
var scoringMethods = require('../models/scoringMethods')

//This Module is Written to Eliminate Redundant Method implementation

module.exports = function (app) {
    //console.log("I am running V2 Get");
    app.get('/api/v2/:id' ,function (req,res) {
        if(req.params === 0) {
          res.status(422).send();
          return;
        }
        var requestId = req.params.id;
        req.user = {}
        req.user.email = "revanthpenugonda@gmail.com";
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

