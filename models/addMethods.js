/**
 * Created by revan on 4/13/2017.
 */
'use strict';

var models = require('./schema');
var moment = require('moment-timezone');
var stringValues = require('../strings')('models');
var User = models.User;


//Loading Schema with scores in it
var EducationScore = models.EducationScore;
var CertificateScore = models.CertificateScore;
var TakingClassesScore = models.TakingClassesScore;
var ConductingClassesScore = models.ConductingClassesScore;
var MentoringScore = models.MentoringScore;
var WritingsScore = models.WritingsScore;
var ConferencesScore = models.ConfrenceScore;
var AwardsScore = models.AwardsScore;
var RecognizedExpertiseScore = models.RecognizedExpertiseScore;
var PatentsScore = models.PatentsScore;
var LanguagesScore = models.LanguagesScore;
var LeisureTravelScore = models.LeisureTravelScore;
var WorkExperience = models.WorkExperience;
var ToolsScore = models.ToolsScore;
var SkillsScore = models.SkillsScore;

//Common Methods

exports.createUser = function (req,callback) {
    var user = new User(req.body);
    user.save(function(err){
        callback(err);
    });
};

var schemaLoader = function (deedName, deedBody){
    switch (deedName) {
    case stringValues.EDUCATION:
        console.log("Ideally before");
        return (new EducationScore(deedBody));
    case stringValues.CERTIFICATES:
        return new CertificateScore(deedBody);
    case stringValues.TAKING_CLASSES:
        return new TakingClassesScore(deedBody);
    case stringValues.CONDUCTING_CLASSES:
        return new ConductingClassesScore(deedBody);
    case stringValues.MENTORING:
        return new MentoringScore(deedBody);
    case stringValues.WRITINGS:
        return new WritingsScore(deedBody);
    case stringValues.CONFERENCES:
        return new ConferencesScore(deedBody);
    case stringValues.AWARDS:
        return new AwardsScore(deedBody);
    case stringValues.RECOGNIZED_EXPERTIESE:
        return new RecognizedExpertiseScore(deedBody);
    case stringValues.PATENTS:
        return new PatentsScore(deedBody);
    case stringValues.LANGUAGES:
        return new LanguagesScore(deedBody);
    case stringValues.LEISURE_TRAVEL:
        return new LeisureTravelScore(deedBody);
    case stringValues.WORK_EXPERIENCE:
        return null;
    case stringValues.TOOLS:
        return new ToolsScore(deedBody);
    case stringValues.SKILLS:
        return new SkillsScore(deedBody);
    }
};


exports.addDeed = function (req, deedName, callback){
    try {
        console.log(req.user);
        if(!req.user){
            console.log("Error With User");
            callback(new Error("Error With User"),null);
            return;
        }
        var userEmail = req.user.email;
        User.findOne({"email": userEmail}, function (err, profile) {
        if (err) {
            console.log("Err Block");
            callback(err, null);
        } else if (profile === null) {
            console.log("Profile Empty log");
            callback(new Error("No User Found"), null);
        } else {
            var newDeed = schemaLoader(deedName, req.body);
            //Testing this because of Async Problems
            console.log("Ideally After");
            newDeed.score = 1;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newDeed.customId = deedName + time;
            newDeed.timeStamp = time;
            console.log(profile);
            profile[deedName].deedData.push(newDeed);
            //Score Compute Addition Here
            profile.save(function (err) {
                callback(err, newDeed.customId);
            });
        }
    });
    } catch (error) {
        callback(error, null);
    }
};
