var models = require('../models/schema');
var userMethods = require('../models/userMethods');
var userJSONSchema = require('../jsonSchemas')('user');
var JSONValidator = require('./commonMethods').JSONValidator;
var getters = require('../models/getMethods');
var parameters = require('../strings/apiStrings');


module.exports = function(app){
    app.post('/signUp',function(req,res){
        if(JSONValidator(userJSONSchema.registration, req.body)){
            userMethods.createUser(req, function (token, err){
                if (err) {
                    console.log(err);
                    res.status(500).send(JSON.stringify({"err": err.toString()}));
                } else {
                    response = {"token": token};
                    getters.getRules(req, function(err, rules) {
                        response[parameters.RULES] = rules;
                        res.status(201).send(JSON.stringify(response));
                    })
                }
            });
        //Failure Condition - JSON schema Mismatch
        } else {
            console.log("INCORRECT FORMAT")
            res.status(500).send(JSON.stringify({err: "Incorrect Format"}));
        }
    });
};