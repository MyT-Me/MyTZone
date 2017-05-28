/**
 * Created by revan on 4/13/2017.
 */


var models = require('./schema');
var User = models.User;
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


//Loading Schema with scores in it
var EducationScore = models.EducationScore;


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

exports.addEducation = function(req,callback){
    console.log("Education Add method");
    var myUser = User.findOne({"email": "revanthpenugonda@gmail.com"},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile== null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            console.log("I found the User");
            var educationUser = new Education(req.body);
            var educationScore = new EducationScore({
                education:educationUser,
                educationScore:scoreEducation(req.body)
            });
            profile.education.educationData.push(educationScore);
            console.log("I came till here");
            profile.save(function(err){
                console.log(err.toString())
            callback(err);
            })
        }
    })
}

exports.addWorkExperience = function(req,callback){
    console.log("Adding Work Experience");
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile== null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var workExperience = new WorkExperience(req.body);
            profile.WorkExperience.push(req.body);
            profile.save(function(err){
            callback(err);
            })
        }
    })
}

exports.addWorkSection = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
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
    
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile== null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var certificates = new Certificates(req.body);
            profile.certificates.push(req.body);
            profile.save(function(err){
            callback(err);
            })
        }
    })

}
exports.addTakingClasses = function(req,callback){
     var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile== null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var takingClasses = new TakingClasses(req.body);
            profile.takingClasses.push(req.body);
            profile.save(function(err){
            callback(err);
            })
        }
    })    

}

exports.addConductingClasses = function(req,callback){
     var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile== null) {
            console.log("Profile EMpty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var conductingClasses = new ConductingClasses(req.body);
            profile.conductingClasses.push(req.body);
            profile.save(function(err){
            callback(err);
            })
        }
    })
}

exports.addMentoring = function(req,callback){
     var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile == null) {
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var mentoring = new Mentoring(req.body);
            profile.mentoring.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addWritings = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var writings = new Writings(req.body);
            profile.writings.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addConfrences = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var conferences = new Conferences(req.body);
            profile.conferences.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addAwards = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var awards = new Awards(req.body);
            profile.awards.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addRecognizedExperteise = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var RecognizedExpertise = new RecognizedExpertise(req.body);
            profile.recognizedExpertise.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addPatents = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var patents = new Patents(req.body);
            profile.patents.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addLanguages = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var languages = new Languages(req.body);
            profile.languages.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addLeisureTravel = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var leisureTravel = new LeisureTravel(req.body);
            profile.leisureTravel.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addTools = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var RecognizedExpertise = new RecognizedExpertise(req.body);
            profile.recognizedExpertise.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addSkills = function(req,callback){
 var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var skills = new Skills(req.body);
            profile.skills.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}

exports.addPoints = function(req,callback){
    var myUser = User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Err Block");
            callback(err);
        } else if(profile==null){
            console.log("Profile Empty log");
            callback(new Error("No User Found"));
        } else {
            console.log(profile.userName);
            console.log(req.body)
            var points = new Points(req.body);
            profile.points.push(req.body);
            profile.save(function(err){
                callback(err);
            })
        }
     })
}



var scoreEducation = function(body){
    
}