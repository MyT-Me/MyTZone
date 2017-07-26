
var models = require('./schema');
var moment = require('moment-timezone');
var stringValues = require('../strings')('models');
var User = models.User;

var EducationScore = models.EducationScore;

exports.editEducation = function (req, callback) {
    User.findOne({"email": "revanthpenugonda@gmail.com"}, function (err, profile){
        if (err) {
            callback(err, null);
        } else if (profile === null) {
            callback(new Error("No User Found"), null);
        } else {
            var newEducation = new EducationScore(req.body);
            newEducation.educationScore = 10;
            newEducation.timeStamp = moment().tz("America/Los_Angeles").format('YYYYMMDDHHmmss');
        }
    });
}