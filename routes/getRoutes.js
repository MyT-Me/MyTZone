'use strict';
var parameters = require('../strings/apiParameters');
var getters = require('../models/getMethods');


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



}
