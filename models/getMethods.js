'use strict';
var strings = require('../strings')('api');
var models = require('./schema');
var getSchemas = require('../jsonSchemas/getSchemas');
var User = models.User;

var sorter = function(a, b){
    var keyA = new Date(a.timeStamp),
        keyB = new Date(b.timeStamp);
    // Compare the 2 dates
    if(keyA < keyB) {
        return -1;
    }
    if(keyA > keyB) {
        return 1;
    }
    return 0;
};


var getJSONProducer = function (jsonSchema, modelObject) {
    var ourSchema = JSON.parse(JSON.stringify(jsonSchema));
    var returnJSON = {};
    for (var key in ourSchema) {
            //console.log(key);
            if(modelObject[ourSchema[key]] !== undefined) {
                returnJSON[key] = modelObject[ourSchema[key]];
            }
    }
    return returnJSON;
};

var getArrayJSONBuilder = function (jsonSchema, modelObject) {
    var jsonArray = [];
    //console.log("Inside The array Builder")
    modelObject.forEach(function (modelObjectElement) {
        var tempElement = getJSONProducer(jsonSchema, modelObjectElement);
        jsonArray.push(tempElement);
    });
    return jsonArray;
}

exports.getDeeds = function (req, deedName, callback) {
    try {
        console.log("Trying to Print User");
        console.log(req.user)
        if(!req.user){
            callback(new Error("Internal error"),null);
            return;
        }
        var userEmail = req.user.email;
        User.findOne({"email": userEmail}, function (err, profile) {
            if (err){
                // Can be any error - ex: Error Due to Connection
                console.log("Error" + err);
                callback(err, null);
            } else if(profile === null){
                // If incorrect Details send about the profile
                console.log("No User Found");
                callback(new Error("No User Found"), null);
            } else {
                //Real Processing Starts
                var deedData = profile[deedName].deedData;
                var ourSchema = getSchemas(deedName);
                //console.log("Get Deeds Our Schema");
                //console.log(ourSchema);
                var toSendArray = getArrayJSONBuilder(ourSchema, deedData);
                toSendArray.sort(sorter);
                var ind = 1;
                toSendArray.forEach(function (element) {
                    element.ind = ind;
                    ind++;
                });
                var toSend = {
                    deedData: toSendArray
                };
                console.log("Sending JSON");
                callback(null ,toSend);
            }
        })
    } catch(err) {
        callback(err, null);
    }

};