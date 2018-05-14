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
    app.post('/api/deeds/:id', auth, function (req, res) {
        if (!(req.params === 0)) {
            var requestId = req.params.id;
            if (verifier.has(requestId)) {
                if (JSONValidator(addJSONSchema[requestId], req.body)) {
                    adders.addDeed(req, requestId, function (err, sendJsonData){
                        if (err) {
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
                    res.status(500).send(JSON.stringify({err:"Incorrect JSON"}));
                }
            // Failure Condition - If 'REQUEST MADE OR PARAMETER IS WRONG' is Wrong
            } else {
                res.status(404).send();
                return;
            }
        // Failure Condition - If Params Not Present 
        } else {
            res.status(404).send();
            return;
        }
    });
};


