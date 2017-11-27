'use strict';
//var parameters =  require('../strings/apiParameters');
var adders = require('../models/addMethods');
var addJSONSchema = require('../jsonSchemas')('addition');
//This is to check if the parameter that is called in the API is valid or not
var verifier = require('../strings')('apiVerfier').addVerifier;
var JSONValidator = require('./commonMethods').JSONValidator;
var auth = require('../authentication/authjwt');

//This Module is Written to Eliminate Redundant Method implementation

module.exports = function (app) {
    console.log("Addition API");
    app.post('/api/v2/:id', function (req, res) {
        if (!(req.params === 0)) {
            console.log("Inside the Combined Addition");
            var requestId = req.params.id;
            console.log("Request Id " + requestId)
            if (verifier.has(requestId)) {
                if (JSONValidator(addJSONSchema[requestId], req.body)) {
                    var userId = "revanthpenugonda@gmail.com";
                    req.user.email = userId;
                    adders.addDeed(req, requestId, function (err, sendJsonData){
                        if (err) {
                            console.log("Error in Addition" + err);
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).send(JSON.stringify(sendJson));
                        }
                    });
                //Failure Condition - Validation Failed
                } else {
                    console.log("INCORRECT JSON")
                    res.status(500).send(JSON.stringify({err:"Incorrect JSON"}));
                }
            // Failure Condition - If 'REQUEST MADE OR PARAMETER IS WRONG' is Wrong
            } else {
                res.status(404).send();
                return;
            }
        // Failure Condition - If Params Not Present 
        } else {
            console.log("Empty Parameter");
            res.status(404).send();
            return;
        }
    });
};



module.exports = function (app) {
    app.get('/api/v2/:id' ,function (req,res) {
        console.log("Getter API Request Received");
        if(req.params === 0) {
          res.status(422).send();
          return;
        }
        var requestId = req.params.id;
        if(verifier.has(requestId)){
            if(requestId === parameters.SCORES) {
                req.user.email = "revanthpenugonda@gmail.com";
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

