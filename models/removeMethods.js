
var models = require('./schema');

var Models = models.Models;
var User = Models.User;

exports.removeEducation = function(req,callback){
    console.log("removing Education");
    User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Error Block");
            callback(err);
        } else if(profile == null) {
            console.log("Profile Empty");
            callback(new Error("No User Found"));
        } else {
            console.log("User FOund")
            console.log(profile.userName);
            console.log(req.body)
            profile.education.pull(req.body)
            profile.save(function(err){
                callback(err)
            })
        }
    })
}


exports.removeWorkExperience = function(req,callback){
        console.log("removing Work Experience");
    User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Error Block");
            callback(err);
        } else if(profile == null) {
            console.log("Profile Empty");
            callback(new Error("No User Found"));
        } else {
            console.log("User FOund")
            console.log(profile.userName);
            console.log(req.body)
            profile.workExperience.pull(req.body)
            profile.save(function(err){
                callback(err)
            })
        }
    })
}

exports.removeCertificates = function(req,callback){
     console.log("removing Cerificates");
    User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Error Block");
            callback(err);
        } else if(profile == null) {
            console.log("Profile Empty");
            callback(new Error("No User Found"));
        } else {
            console.log("User FOund")
            console.log(profile.userName);
            console.log(req.body)
            profile.certificates.pull(req.body)
            profile.save(function(err){
                callback(err)
            })
        }
    })
}



exports.removeCertificates = function(req,callback){
     console.log("removing Cerificates");
    User.findOne({'userName':'revaries'},function(err,profile){
        if(err){
            console.log("Error Block");
            callback(err);
        } else if(profile == null) {
            console.log("Profile Empty");
            callback(new Error("No User Found"));
        } else {
            console.log("User FOund")
            console.log(profile.userName);
            console.log(req.body)
            profile.certificates.pull(req.body)
            profile.save(function(err){
                callback(err)
            })
        }
    })
}