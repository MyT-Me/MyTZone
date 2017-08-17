'use strict';
//var parameters =  require('../strings/apiParameters');
var adders = require('../models/addMethods');
var addJSONSchema = require('../jsonSchemas')('addition');
//This is to check if the parameter that is called in the API is valid or not
var verifier = require('../strings')('apiVerfier').verifier;
var JSONValidator = require('./commonMethods').JSONValidator;
/*
var JSONValidator = function (validationSchema, req, res, callback) {
    var result = validator.validate(req.body, validationSchema);
    if(result.valid) {
        callback(req, res);
    } else {
        console.log("=======================================================")
        console.log("Error");
        console.log(result.errors);

        console.log("Input");
        console.log(req.body);
        res.status(500).send(result.errors);
        return;
    }
};*/



//This Module is Written to Eliminate Redundant Method implementation

module.exports = function (app) {
    console.log("Addition API");
    app.post('/api/deeds/:id', function (req, res) {
        if (!(req.params === 0)) {
            console.log("Inside the Combined Addition");
            var requestId = req.params.id;
            if (verifier.has(requestId)) {
                if (JSONValidator(addJSONSchema[requestId], req.body)) {
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


/*
module.exports = function (app) {
    console.log("Addition Ran");
    app.post('/api/deeds/:id', function (req, res) {
        console.log(req);
        if (!(req.params === 0)) {
            switch (req.params.id) {
            case parameters.EDUCATION:
                JSONValidator(addJSONSchema.education, req, res, function (req, res){
                    adders.addEducation(req, function (err, sendJsonData) {
                        if (err) {
                            console.log(err);
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.WORK_EXPERIENCE:
                adders.addWorkExperience(req, function (err) {
                    if (err) {
                        console.log("Adding Work Experience");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "workexperience added"});
                    }
                });
                break;
            case parameters.CERTIFICATES:
                JSONValidator(addJSONSchema.Certificate, req, res, function (req, res){
                    adders.addCertificates(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Certificates");
                            console.log(err)
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.TAKING_CLASSES:
                JSONValidator(addJSONSchema.TakingClasses, req, res, function (req, res){
                    adders.addTakingClasses(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Taking Classes");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.CONDUCTING_CLASSES:
                JSONValidator(addJSONSchema.ConductingClasses, req, res, function (req, res) {
                    adders.addConductingClasses(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Conducting Classes");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.MENTORING:
                JSONValidator(addJSONSchema.Mentoring, req, res, function (req, res) {
                    adders.addMentoring(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Mentoring");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.WRITINGS:
                JSONValidator(addJSONSchema.Writing, req, res, function (req, res) {
                    adders.addWritings(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Writings");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.CONFERENCES:
                JSONValidator(addJSONSchema.Confrences, req, res, function (req, res) {
                    adders.addPatents(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Confrences");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.AWARDS:
                JSONValidator(addJSONSchema.Awards, req, res, function (req, res) {
                    adders.addAwards(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Awards");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.RECOGNIZED_EXPERTISE:
                JSONValidator(addJSONSchema.RecognizedExperties, req, res, function (req, res){
                    adders.addRecognizedExperteise(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Recognized Expertiese");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.PATENTS:
                JSONValidator(addJSONSchema.Patents, req, res, function (req, res){
                    adders.addPatents(req, function (err, sendJsonData) {
                    if (err) {
                        console.log("Error in Patents");
                        res.status(500).send(err.message);
                    } else {
                        var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                    }
                    });
                });
                break;
            case parameters.LANGUAGES:
                JSONValidator(addJSONSchema.Languages, req, res, function (req, res){
                    adders.addLanguages(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Languages");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.LEISURE_TRAVEL:
                JSONValidator(addJSONSchema.LeisureTravel, req, res, function(req, res) {
                    adders.addLeisureTravel(req, function (err, sendJsonData) {
                        if (err) {
                            console.log("Error in Leisure Travel");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }     
                    });
                });
                break;
            case parameters.TOOLS:
                JSONValidator( addJSONSchema.tools, req, res, function(req, res){
                    adders.addTools(req, function(err, sendJsonData) {
                        if (err) {
                            console.log("Error in Tools");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJson));
                        }
                    });
                });
                break;
            case parameters.SKILLS:
                JSONValidator(addJSONSchema.skills, req, res, function(req, res) {
                    adders.addSkills(req, function(err, sendJsonData) {
                        if (err) {
                            console.log("Error in Skills");
                            res.status(500).send(err.message);
                        } else {
                            var sendJson = {
                                dbid: sendJsonData
                            };
                            res.status(201).json(JSON.stringify(sendJsonData));
                        }
                    });
                });
                break;
            case parameters.POINTS:
                break;
            default:
                res.status(500).json({'err': 'id not found'});
                break;
            }
        } else {
            console.log("Inside the Error");
            res.status(404).json({"error": "Please Enter a Parameter"});
        }
    })
}*/