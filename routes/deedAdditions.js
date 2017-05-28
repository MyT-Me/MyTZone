var parameters = require('../strings/apiParameters');
var adders = require('../models/addMethods')


module.exports = function (app) {
    app.post('/api/deeds/:id',function (req,res) {
        if(!(req.params==0)){
            switch (req.params.id){
                case parameters.EDUCATION:
                    adders.addEducation(req,function(err){
                        if(err) {
                            res.status(500).send(err.message);
                        } else {
                            res.status(201).json({"operation":"education added"});
                        }
                    })

                    break;
                case parameters.WORK_EXPERIENCE:
                    adders.addWorkExperience(req,function(err){
                        if(err){
                            console.log("Adding Work Experience");
                            res.status(500).send(err.message);
                        } else {
                            res.status(201).json({"operation":"workexperience added"});
                        }
                    })
                    break;
                case parameters.CERTIFICATES:
                    adders.addCertificates(req,function(err){
                        if(err){
                            console.log("Error in Certificates")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Certificate Added"});
                        }
                    })
                    break;
                case parameters.TAKING_CLASSES:
                    adders.addTakingClasses(req,function(err){
                       if(err){
                            console.log("Error in Taking Classes")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Taking Classes Added"});
                        } 
                    })
                    break;
                case parameters.CONDUCTING_CLASSES:
                    adders.addConductingClasses(req,function(err){
                        if(err){
                            console.log("Error in Conducting Classes")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Conducting Classes Added"});
                        }
                    })
                    break;
                case parameters.MENTORING:
                    adders.addMentoring(req,function(err){
                        if(err){
                            console.log("Error in Mentoring")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Mentoring Added"});
                        }
                    })
                    break;
                case parameters.WRITINGS:
                    adders.addWritings(req,function(err){
                        if(err){
                            console.log("Error in Writings")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Writing Added"});
                        }
                    })
                    break;
                case parameters.CONFERENCES:
                    adders.addPatents(req,function(err){
                        if(err){
                            console.log("Error in Confrences")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Confrences Added"});
                        }
                    })
                    break;
                case parameters.AWARDS:
                    adders.addAwards(req,function(err){
                        if(err){
                            console.log("Error in Awards")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Awards Added"});
                        }
                    })
                    break;
                case parameters.RECOGNIZED_EXPERTISE:
                    adders.addRecognizedExperteise(req,function(err){
                        if(err){
                            console.log("Error in Recognized Expertiese")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Recognized Expertiese Added"});
                        }
                    })
                    break;
                case parameters.PATENTS:
                    break;
                case parameters.LANGUAGES:
                    adders.addLanguages(req,function(err){
                        if(err){
                            console.log("Error in Languages")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Languages Added"});
                        }
                    })
                    break;
                case parameters.LEISURE_TRAVEL:
                    adders.addLeisureTravel(req,function(err){
                        if(err){
                            console.log("Error in Leisure Travel")
                            res.status(500).send(err.message)
                        } else {
                            res.status(201).json({"operation":"Leisure Travel Added"});
                        }                        
                    })
                    break;
                case parameters.TOOLS:
                    break;
                case parameters.SKILLS:
                    break;
                case parameters.POINTS:
                    break;
                default:
                    res.status(500).json({'err':'id not found'});
                    break;
            }
        } else {
            console.log("Inside the Error");
            res.status(404).json({"error":"Please Enter a Parameter"});
        }
    })
}

