'use strict';
var passport = require('passport');
var localStatergy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('userProfile');

/*passport.use(new localStatergy({
    usernameField: 'email'
}, function (userName, password, done) {
    User.findOne({email: userName}, function (err, userProfile) {
        if (err) { 
            return done(err);
        };
        if (!userProfile) {
            return done(null, false, {
                message: 'User not found'
            });
        };
        if (!userProfile.vaildPassword(password)) {
            return done(null, false, {
                message: 'Wrong Password'
            });
        } else {
            return done(null, userProfile);
        }
    });
}));*/


//Implementing Two Local Statergies - One For UserName and Other for Email Id 
passport.use('with-username', new localStatergy({
    usernameField: 'userName'
    },
    function(userName, password, done) {
        User.findOne({userName: userName}, function(err, userProfile){
            if(err){
                return done(err)
            }
            if(!userProfile){
                return done(null, false, {message: 'User Name Not Recognized'});
            }
            if(!userProfile.vaildPassword(password)){
                return done(null, false, {message: 'Password is Wrong'});
            }
            //If Everything is correct
            return done(null, userProfile);
        });
    }
));
//One with Email Because We don't Know the user Preference
passport.use('with-Email', new localStatergy({
    usernameField: 'userName'
    },
    function(userName, password, done) {
        User.findOne({email: userName}, function(err, userProfile){
           if(err){
               return done(err);
           }
           if(!userProfile){
               return done(null,false, {message: "Email Not Recognized"});
           }
           if(!userProfile.vaildPassword(password)){
               return done(null, false, {message: "Password Incorrect"});
           }
           //If Everything Works With Plan
           return done(null, userProfile);
        });
    }
))