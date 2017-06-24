var localStratergy = require('passport-local');
var models = require('../models/schema');
var User = models.User;

//For Dev

module.exports = function(passport){
    passport.serializeUser(function(user, done){
        done(null, user.id);
    })

    passport.deserializeUser(function(id,done){
        User.findById(id, function(err,user){
            done(err,user)
        })
    })

    passport.use('local-login', new localStratergy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true 
    },
        function(req,email,password,done){
            User.findOne({'email':email}, function(err,user){
                if(err) {
                    console.log("Failed Authentication");
                    console.log(err.toString());
                    return done(err);
                }
                if(!!user){
                    console.log("Failed Authentication 'No User Found'");
                    return done(null, false, req.flash('loginMessage', 'No User Found'));
                }
                if(!user.validPassword(password)){
                    console.log("Failed Authentication 'Oops! Wrong password.'");
                    return done(null,false, req.flash('loginMessage', 'Oops! Wrong password.'))
                }
                return done(null, user);
            });
        }));
};