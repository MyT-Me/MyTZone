var models = require('./schema');
var User = models.User;

exports.getEducation = function(req,callback){
    User.findOne({"email": "revanthpenugonda@gmail.com"},function(err,profile){
        if(err){
            console.log(err);
            callback(err,null);
        } else if(profile == null) {
            console.log("No User Found");
            callback(new Error("No User Found"),null);           
        } else {
            console.log(profile.education);
            var educationData = profile.education.educationData;
            educationData.array.forEach(function(element) {
                delete element._id;
                delete element.educationScore
            }, this);
            var toSend = {}
            callback(null,educationData);
        }
    })
}