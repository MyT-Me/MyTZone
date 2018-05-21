'use strict';
var passport = require('passport');
var models = require('../models/schema');
var User = models.User;
var userJSONSchema = require('../jsonSchemas')('user');
var JSONValidator = require('./commonMethods').JSONValidator;
var validator = require('validator');
var auth = require('../authentication/authjwt');
var getters = require('../models/getMethods');
var parameters = require('../strings/apiStrings');
module.exports = function (app){
    app.post('/login', function (req, res){
        console.log("Inside the Login Module");
        if (JSONValidator(userJSONSchema.login, req.body)){
            console.log(req.body);
            if(validator.isEmail(req.body.userName)){
                passport.authenticate('with-Email', function(err, user, info){
                    var token;
                    if(err) {
                        res.status(404).json(err);
                    }
                    if(user){
                        token = user.generateJWT();
                        var response = {
                            "token": token
                        }
                        getters.getRules(req, function(err, rules) {
                            response[parameters.RULES]  = rules;
                            res.status(200).json(response);
                        })
                    } else {
                        res.status(401).json(info);
                    }
                })(req,res);
            } else {
                passport.authenticate('with-username', function(err, user, info){
                    var token;
                    if(err) {
                        console.log("Error ERROR ");
                        res.status(404).json(err);
                    } 
                    if(user){
                        token = user.generateJWT();
                        var response = {
                            "token": token
                        }
                        getters.getRules(req, function(err, rules) {
                            response[parameters.RULES] = rules;
                            res.status(200).json(response);
                        });
                    } else {
                        res.status(401).json(info);
                    }
                })(req,res);
            }
        } else {
            res.status(500).json("");
        }
    });

    app.post('/isLoginValid' ,auth, function (req,res){
        console.log("Inside the Login Authentication ");
        res.status(200).json();
    });
};  
