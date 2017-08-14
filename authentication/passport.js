'use strict';
var passport = require('passport');
var localStatergy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('userProfile');

passport.use(new localStatergy({
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
}));