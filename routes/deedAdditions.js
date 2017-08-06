'use strict';
var parameters = require('../strings/apiParameters');
var adders = require('../models/addMethods');
var addJSONSchema = require('../jsonSchemas')('addition');
var validatorClass = require('jsonschema').Validator; 
var validator = new validatorClass();

module.exports = function (app) {
    console.log("Addition Ran");
    app.post('/api/deeds/:id', function (req, res) {
        if (!(req.params === 0)) {
            switch (req.params.id) {
            case parameters.EDUCATION:
                var result = validator.validate(req.body, addJSONSchema.education);
                if (result.valid) {
                    console.log("JSON Schema Test Passed");
                } else {
                    console.log("Error")
                    res.status(500).send(result.errors);
                    return;
                }
                adders.addEducation(req, function (err, sendJson) {
                    if (err) {
                        console.log(err);
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json(sendJson);
                    }
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
                adders.addCertificates(req, function (err) {
                    if (err) {
                        console.log("Error in Certificates");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Certificate Added"});
                    }
                });
                break;
            case parameters.TAKING_CLASSES:
                adders.addTakingClasses(req, function (err) {
                    if (err) {
                        console.log("Error in Taking Classes");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Taking Classes Added"});
                    }
                });
                break;
            case parameters.CONDUCTING_CLASSES:
                adders.addConductingClasses(req, function (err) {
                    if (err) {
                        console.log("Error in Conducting Classes");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Conducting Classes Added"});
                    }
                });
                break;
            case parameters.MENTORING:
                adders.addMentoring(req, function (err) {
                    if (err) {
                        console.log("Error in Mentoring");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Mentoring Added"});
                    }
                });
                break;
            case parameters.WRITINGS:
                adders.addWritings(req, function (err) {
                    if (err) {
                        console.log("Error in Writings");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation":"Writing Added"});
                    }
                });
                break;
            case parameters.CONFERENCES:
                adders.addPatents(req, function (err) {
                    if (err) {
                        console.log("Error in Confrences");
                        res.status(500).send(err.message);
                        } else {
                        res.status(201).json({"operation": "Confrences Added"});
                    }
                });
                break;
            case parameters.AWARDS:
                adders.addAwards(req, function (err) {
                    if (err) {
                        console.log("Error in Awards");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Awards Added"});
                    }
                });
                break;
            case parameters.RECOGNIZED_EXPERTISE:
                adders.addRecognizedExperteise(req, function (err) {
                    if (err) {
                        console.log("Error in Recognized Expertiese");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Recognized Expertiese Added"});
                    }
                });
                break;
            case parameters.PATENTS:
                adders.addPatents(req, function (err) {
                    if (err) {
                        console.log("Error in Patents");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Patents Added"});
                    }
                });
                break;
            case parameters.LANGUAGES:
                adders.addLanguages(req, function (err) {
                    if (err) {
                        console.log("Error in Languages");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Languages Added"});
                    }
                });
                break;
            case parameters.LEISURE_TRAVEL:
                adders.addLeisureTravel(req, function (err) {
                    if (err) {
                        console.log("Error in Leisure Travel");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Leisure Travel Added"});
                    }     
                });
                break;
            case parameters.TOOLS:
                adders.addTools(req, function (err) {
                    if (err) {
                        console.log("Error in Tools");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Tools Added"});
                    }
                });
                break;
            case parameters.SKILLS:
                adders.addSkills(req, function (err) {
                    if (err) {
                        console.log("Error in SKILLS");
                        res.status(500).send(err.message);
                    } else {
                        res.status(201).json({"operation": "Skill Added"})
                    }
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
}