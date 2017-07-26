/**
 * Created by revan on 4/13/2017.
 */


var models = require('./schema');
var moment = require('moment-timezone');
var stringValues = require('../strings')('models');
var User = models.User;
/*
NO LONGER NEED TO THESE
WILL UNCOMMENT WHEN NEEDED
var Education = models.Education;
var WorkSection = models.WorkSection;
var WorkExperience = models.WorkExperience;
var Certificates = models.Certificates;
var TakingClasses = models.TakingClasses;
var ConductingClasses = models.ConductingClasses; 
var Mentoring = models.Mentoring;
var Writings = models.Writings;
var Conferences = models.Conferences;
var Awards = models.Awards;
var RecognizedExpertise = models.RecognizedExpertise;
var Patents = models.Patents;
var Languages = models.Languages;
var LeisureTravel = models.LeisureTravel;
var Tools = models.Tools;
var Skills = models.Skills;
*/


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
// Need to Add Tools, Skills and Points Soon

/*
var UserProfileSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type:String, required:true},
    middleName: {type:String, },
    userName: {type:String, required: true},
    email: {type:mongoose.SchemaTypes.Email, requiredtrue:true },
    firstYear: {type:Date},
    education:[educationSchema],
    workExperience:[workExperienceSchema],
    certificates:[certificateSchema],
    takingClasses:[takingClassesSChema],
    conductingClasses:[conductingClassesSchema],
    mentoring:[mentoringSchema],
    writings:[writingSchema],
    conferences:[conferenceSchema],
    awards:[awardSchema],
    recognizedExpertise:[recognizedExpertiseSchema],
    patents:[patentsSchema],
    languages:[languagesSchema],
    leisureTravel:[leisureTravelSchema],
    tools:[],
    skills:[],
    points:[]
});
*/


exports.createUser = function(req,callback) {
    var user = new User(req.body);
    user.save(function(err){
        callback(err);
    })
}

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
            console.log(profile.userName);
            console.log(req.body);
            console.log("I found the User");
            var newEducation = new EducationScore(req.body);
            newEducation.educationScore = 10;
            var time = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
            newEducation.customId = stringValues.EDUCATION + time;
            newEducation.timeStamp = time;
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
            console.log(req.body)

            //Computing and Adding a Certificate
            var newCertificate = new CertificateScore(req.body);
            newCertificate.certificatesScore = 10;
            profile.certificates.certificateData.push(newCertificate);
            profile.certificates.certificateTotalScore = profile.certificates.certificateTotalScore + 10;
            profile.save(function(err){
            callback(err);
            })
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
             console.log(req.body)
            var newMentoring = new MentoringScore(req.body);
            newMentoring.mentoringScore = 10;
            profile.mentoring.mentoringData.push(newMentoring);       
            profile.mentoring.mentoringTotalScore = profile.mentoring.mentoringTotalScore + 10;
            profile.save(function(err){
                callback(err);
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
            newTakingClasses.TakingClassesScore = 10;
            profile.takingClasses.takingClassesData.push(newTakingClasses);
            profile.takingClasses.takingClassesTotalScore = profile.takingClasses.takingClassesTotalScore + 10;
            profile.save(function(err){
                callback(err);
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
            newConductingClasses.ConductingClassesScore = 10;
            profile.conductingClasses.conductingClassesData.push(newConductingClasses);
            profile.conductingClasses.conductingClassesTotalScore = profile.conductingClasses.conductingClassesTotalScore + 10;
            profile.save(function(err){
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
            profile.writings.writingsData.push(newWritings);
            profile.writings.writingTotalScore = profile.writings.writingTotalScore + 10; 
            profile.save(function(err){
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
            var newConfrences = new ConfrenceScore(req.body);
            newConfrences.confrenceScore = 10;
            profile.conferences.confrenceData.push(newConfrences);
            profile.conferences.confrenceTotalScore = profile.conferences.confrenceTotalScore + 10; 
            profile.save(function(err){
                callback(err);
            })
        }
    })
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
            profile.awards.awardsData.push(newAwards);
            profile.awards.awardsTotalScore = profile.awards.awardsTotalScore +10;                   
            profile.save(function(err){
                callback(err);
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
            profile.recognizedExpertise.recognizedExpertiseData.push(newRecognizedExperteise);
            profile.recognizedExpertise.recognizedExpertiseTotalScore = profile.recognizedExpertise.recognizedExpertiseTotalScore + 10; 
            profile.save(function(err){
                callback(err);
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
            profile.patents.patentsData.push(newPatent);
            profile.patents.patentsTotalScore = profile.patents.patentsTotalScore + 10; 
            profile.save(function(err){
                                callback(err);
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
            profile.languages.languagesData.push(newLanguages);
            profile.languages.languagesTotalScore = profile.languages.languagesTotalScore+10;        
            profile.save(function(err){
                callback(err);
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
            profile.leisureTravel.leisureTravelData.push(newLeisureTravel);
            profile.leisureTravel.leisureTravelTotalScore = profile.leisureTravel.leisureTravelTotalScore + 10;
            profile.save(function(err){
                callback(err);
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

