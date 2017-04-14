/**
 * Created by revan on 4/13/2017.
 */

var models = require('./schema');
var User = models.User;
var Education = models.Education;

exports.createUser = function(req,callback) {
    var user = new User(req.body);
    user.save(function(err){
        callback(err);
    })
}

exports.addEducation = function(req,callback){
    console.log("Education Add method");
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
            var education = new Education(req.body);
            profile.education.push(req.body);
            profile.save(function(err){
            callback(err);
            })
            /*var education = new Education(req.body);
            education.save(function(err){
                callback(err);
            })*/
        }
    })


}

exports.addWorkExperience = function(req,callback){

}

exports.addWorkSection = function(req,callback){

}

exports.addCertificates = function(req,callback){

}
exports.addTakingClasses = function(req,callback){

}

exports.addConductingClasses = function(req,callback){

}

exports.addMentoring = function(req,callback){

}

exports.addWritings = function(req,callback){

}

exports.addConfrences = function(req,callback){

}

exports.addAwards = function(req,callback){

}

exports.addRecognizedExperteise = function(req,callback){

}

exports.addPatents = function(req,callback){

}

exports.addLanguages = function(req,callback){

}

exports.addLeisureTravel = function(req,callback){

}

exports.addTools = function(req,callback){

}

exports.addSkills = function(req,callback){

}

exports.addPoints = function(req,callback){

}
    