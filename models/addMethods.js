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
    }
};


exports.addDeed = function (req, deedName, callback){
    User.findOne({"email": "revanthpenugonda@gmail.com"}, function (err, profile) {
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
            newDeed.score = 10;
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
};

// These Functions below would become Redundant if the Above function Works
/*
exports.addEducation = function (req, callback) {
    console.log("Education Add method");
    User.findOne({"email": "revanthpenugonda@gmail.com"}, function (err, profile) {
        if (err) {
            console.log("Err Block");
            callback(err, null);
        } else if (profile === null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"), null);
        } else {
            console.log("Input Request");
            console.log(req.body);
            console.log("Saving Education Block");
            console.log(newEducation);

            var newEducation = new EducationScore(req.body);
            newEducation.educationScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newEducation.customId = stringValues.EDUCATION + time;
            newEducation.timeStamp = time;
            console.log(newEducation);
            profile.education.educationData.push(newEducation);
            profile.save(function (err) {
                //console.log(err.toString())
                callback(err, newEducation.customId);
            });
        }
    });
}

exports.addWorkExperience = function(req,callback){
    console.log("Adding Work Experience");
    User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile== null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var newWorkExperience = new WorkExperience(req.body);
            profile.workExperience.workExperienceData.push(newWorkExperience);
            profile.save(function(err){
            if(err)
                {
                    console.log(err);
                }
            callback(err);
            })
        }
    })
}

exports.addWorkSection = function(req,callback){
    User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile== null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var workSection = new WorkSection(req.body);
            profile.WorkExperience.workSection.push(req.body);
            profile.save(function(err){
            callback(err);
            })
        }
    })
}


exports.addCertificates = function(req,callback){
    console.log("I entered Certificate Addition");
    User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile== null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            //Computing and Adding a Certificate
            var newCertificate = new CertificateScore(req.body);
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newCertificate.customId = stringValues.CERTIFICATES + time;
            newCertificate.timeStamp = time;
            newCertificate.certificatesScore = 10;
            profile.certificates.certificateData.push(newCertificate);
            profile.certificates.certificateTotalScore = profile.certificates.certificateTotalScore + 10;
            profile.save(function(err){
                callback(err, newCertificate.customId);
            });
        }
    })

}

exports.addMentoring = function(req,callback){
     console.log("Entered Adding Mentoring ");
     User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
            var newMentoring = new MentoringScore(req.body);
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newMentoring.mentoringScore = 10;
            newMentoring.customId = stringValues.MENTORING + time;
            newMentoring.timeStamp = time;
            profile.mentoring.mentoringData.push(newMentoring);       
            profile.mentoring.mentoringTotalScore = profile.mentoring.mentoringTotalScore + 10;
            profile.save(function(err){
                callback(err, newMentoring.customId);
            })
        }
    })
}



exports.addTakingClasses = function(req,callback){
     console.log("Entered Adding Taking Classes");
     User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
            console.log("Err Block in Takig Classes");
            callback(err);
         } else if(profile==null){
             console.log("Couldnt find Profile");
             callback(new Error("User Not found"));
         } else {
             console.log(req.body)
            //Compute Part along with new Taking Classes Block
            var newTakingClasses = new TakingClassesScore(req.body);
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newTakingClasses.TakingClassesScore = 10;
            newTakingClasses.customId = stringValues.TAKING_CLASSES + time;
            newTakingClasses.timeStamp = time;
            profile.takingClasses.takingClassesData.push(newTakingClasses);
            profile.takingClasses.takingClassesTotalScore = profile.takingClasses.takingClassesTotalScore + 10;
            profile.save(function(err){
                console.log(err);
                callback(err, newTakingClasses.customId);
            })
         }
     })
}

exports.addConductingClasses = function(req,callback){
     console.log("Entered Adding Conducting Classes");
     User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
             console.log(req.body)
            var newConductingClasses = new ConductingClassesScore(req.body);
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newConductingClasses.customId = stringValues.CONDUCTING_CLASSES + time;
            newConductingClasses.timeStamp = time;
            newConductingClasses.ConductingClassesScore = 10;
            profile.conductingClasses.conductingClassesData.push(newConductingClasses);
            profile.conductingClasses.conductingClassesTotalScore = profile.conductingClasses.conductingClassesTotalScore + 10;
            profile.save(function (err) {
                callback(err);
            })
        }
    }) 
}


exports.addWritings = function(req,callback){
    console.log("Entered Adding Writings");
     User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
             console.log(req.body)
            var newWritings = new WritingsScore(req.body);
            newWritings.writingScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newWritings.customId = stringValues.WRITINGS + time;
            newWritings.timeStamp = time;
            profile.writings.writingsData.push(newWritings);
            profile.writings.writingTotalScore = profile.writings.writingTotalScore + 10; 
            profile.save(function (err) {
                callback(err);
            })
        }
    })
}

exports.addConfrences = function(req,callback){
     User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
            console.log(req.body)
            var newConfrences = new ConferencesScore(req.body);
            newConfrences.confrenceScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newConfrences.customId = stringValues.CONFERENCES + time;
            newConfrences.timeStamp = time;
            profile.conferences.confrenceData.push(newConfrences);
            profile.conferences.confrenceTotalScore = profile.conferences.confrenceTotalScore + 10; 
            profile.save(function (err) {
                callback(err, newConfrences.customId);
            });
        }
    });
}

exports.addAwards = function(req,callback){
     User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
             console.log(req.body)
            var newAwards = new AwardsScore(req.body); 
            newAwards.awardsScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newAwards.customId = stringValues.AWARDS + time;
            newAwards.timeStamp = time;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newConfrences.customId = stringValues.CONDUCTING_CLASSES + time;
            newConfrences.timeStamp = time;
            profile.awards.awardsData.push(newAwards);
            profile.awards.awardsTotalScore = profile.awards.awardsTotalScore +10;                   
            profile.save(function(err){
                callback(err, newAwards.customId);
            })
        }
    })
}

exports.addRecognizedExperteise = function(req,callback){
    User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
             console.log(req.body)
            var newRecognizedExperteise = new RecognizedExpertiseScore(req.body);        
            newRecognizedExperteise.recognizedExpertiseScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newRecognizedExperteise.customId = stringValues.RECOGNIZED_EXPERTIESE + time;
            newRecognizedExperteise.timeStamp = time;
            profile.recognizedExpertise.recognizedExpertiseData.push(newRecognizedExperteise);
            profile.recognizedExpertise.recognizedExpertiseTotalScore = profile.recognizedExpertise.recognizedExpertiseTotalScore + 10; 
            profile.save(function(err){
                callback(err, newRecognizedExperteise.customId);
            })
        }
    })
}

exports.addPatents = function(req,callback){
    User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
             console.log(req.body)
            var newPatent = new PatentsScore(req.body);        
            newPatent.patentsScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newPatent.customId = stringValues.PATENTS + time;
            newPatent.timeStamp = time;
            profile.patents.patentsData.push(newPatent);
            profile.patents.patentsTotalScore = profile.patents.patentsTotalScore + 10; 
            profile.save(function(err){
                callback(err, newPatent.customId);
            })
        }
    })
}

exports.addLanguages = function(req,callback){
    User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
             console.log(req.body)
            var newLanguages = new LanguagesScore(req.body); 
            newLanguages.languagesScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newLanguages.customId = stringValues.LANGUAGES + time;
            newLanguages.timeStamp = time;
            profile.languages.languagesData.push(newLanguages);
            profile.languages.languagesTotalScore = profile.languages.languagesTotalScore+10;        
            profile.save(function(err){
                callback(err, newLanguages.customId);
            })
        }
    })
}

exports.addLeisureTravel = function(req,callback){
    User.findOne({'userName':'revaries'},function(err,profile){
         if(err){
             console.log("Err Block in conducting classes");
             callback(err);
         } else if(profile==null){
            console.log("Couldn't find profile");
            callback(new Error("User not found"));
         } else {
            console.log(req.body)
            var newLeisureTravel = new LeisureTravelScore(req.body);        
            newLeisureTravel.leisureTravelScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newLeisureTravel.customId = stringValues.LEISURE_TRAVEL + time;
            newLeisureTravel.timeStamp = time;
            profile.leisureTravel.leisureTravelData.push(newLeisureTravel);
            profile.leisureTravel.leisureTravelTotalScore = profile.leisureTravel.leisureTravelTotalScore + 10;
            profile.save(function(err){
                callback(err, newLeisureTravel.customId);
            })
        }
    });
}

exports.addTools = function(req,callback){
    User.findOne({'username': 'revaries'}, function (err, profile){
        if(err) {
            console.log("Err Block in Add Tools");
            callback(err);
        } else if(profile == null){
            console.log("Couldn't find user profile");
            callback(new Error("User Not found"));
        } else {
            console.log(req.body);
            var newToolsScore = new newToolsScore(req.body);
            newToolsScore.toolsScore = 10;
            profile.tools.toolsData.push(newToolsScore);
            profile.tools.toolsTotalScore = profile.tools.toolsTotalScore + 10;
            profile.save(function(err){
                callback(err);
            }); 
        }
    });
}

exports.addSkills = function(req,callback){
}

exports.addPoints = function(req,callback){
}

*/