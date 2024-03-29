var models = require('../models/schema');
var userMethods = require('../models/userMethods');
var userJSONSchema = require('../jsonSchemas')('user');
var JSONValidator = require('./commonMethods').JSONValidator;

module.exports = function(app){
    app.post('/signUp',function(req,res){
        if(JSONValidator(userJSONSchema.registration, req.body)){
            userMethods.createUser(req, function (token, err){
                if (err) {
                    res.status(500).send(JSON.stringify({"err": err.toString()}));
                } else {
                    res.status(201).send(JSON.stringify({"token": token}));
                }
            });
        //Failure Condition - JSON schema Mismatch
        } else {
            res.status(500).send(JSON.stringify({err: "Incorrect Format"}));
        }
    });
};