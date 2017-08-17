'use strict';
var parameters = require('../strings/apiStrings');
var getters = require('../models/getMethods');
var verifier = require('../strings')('apiVerfier').verifier;

module.exports = function (app) {
    app.get('/api/:id', function (req,res) {
        console.log("Getter API Request Received");
        if(req.params === 0) {
          res.status(422).send();
          return;
        }
        var requestId = req.params.id;
        if(verifier.has(requestId)){
            getters.getDeeds(req, requestId, function (err, deedData) {
                if(err !==null){
                    res.status(500).send(JSON.stringify({error: err.toString()}));
                } else {
                    res.status(200).send(deedData);
                }
            })
        }

    });
};



//Similar to All other Reconstructions - Removing all the additional Methods by Implementing Singe Method that can serve for all Operations
//Advantages - Easily Maintainable Code and adding functionaries becomes easier
/*
module.exports = function (app) {
    app.get('/api/:id/:customId', function (req, res) {
        if (req.params === 0) {
            res.status(404).send();
        }
        switch (req.params.id) {
        case parameters.EDUCATION:
            getters.getEducation(req, function (err, educationData) {
                if (!(err === null)) {
                    res.status(500).send({error: err.toString()});
                } else {
                    res.status(200).send(educationData);
                }
            });
            break;
        case parameters.DEEDS:
            getters.getDeeds(req, function (err, deedsData){
                if (!(err === null)) {
                    res.status(500).send({error: err.toString()});
                } else {
                    res.status(200).send(deedsData);
                }
            });
            break;
        case parameters.WORK_EXPERIENCE:
            break;
        case parameters.TOOLS:
            break;
        case parameters.SKILLS:
            break;             
        default:
            break;
        }
    });
};

module.exports = function(app){
    console.log("Education Test")
    //Adding Education GET
    app.get('/api/education', function (req, res){
        getters.getEducation(req,function(err,educationData){
            console.log("CalledBack")
            if(err===null)
            {
                console.log("Here");
                res.send(educationData);    
            } else {
                res.send(err.toString());
            }
        })
    })

    //Adding Deeds GET
    app.get('/api/deeds',function(req,res){
        getters.getDeeds(req,function(err,deedsData){
            if(err===null){
                res.send(deedsData);
            } else {
                res.send(err.toString);
            }
        })
    })

    //Adding Skills Get
    app.get('/api/skills',function(req,res){
        
    })



}*/
