var models = require('./schema');
var user = models.User;

exports.createUser = function(req,callback) {
    var User = new user();
    console.log(req.body);
    User.save(function(err){
        if(err) {
            console.log(err);
        }
        callback(err);
    });
}