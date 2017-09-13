var models = require('./schema');
var user = models.User;
var passport = require('passport');
var passportLocal = require('passport-local');


exports.createUser = function(req,callback) {
    var User = new user(req.body);
    //console.log(req.body);
    //Need To set password for validation Purposes
    User.setPassword(req.body.password);
    User.save(function(err){
        if(err) {
            console.log(err);
        }
        var token = User.generateJWT();
        callback(token, err);
    });
}

exports.login = function (req, res) {
    passport.authenticate('local', function(err, user, info){
        //To Return To the User
        console.log("Authentication Login Called");
        var token;
        if(err) {
            console.log("Error From Passport");
            res.status(404).json(err);
            return;
        }
        // If a User is found
        if(user) {
            console.log("User Found");
            token = user.generateJWT(); 
            console.log("Token Generated");
            res.status(200).status({'token':token});
        } else {
            //If no user Found
            res.status(401).json(info);
        }
    })(req, res);
  };