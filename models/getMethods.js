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
    console.log("");
    console.log(modelObject);
    for (var key in ourSchema) {
            if(modelObject[ourSchema[key]] !== undefined) {
                returnJSON[key] = modelObject[ourSchema[key]];
            }
    }
    return returnJSON;
};

var getArrayJSONBuilder = function (jsonSchema, modelObject) {
    var jsonArray = [];
    modelObject.forEach(function (modelObjectElement) {
        var tempElement = getJSONProducer(jsonSchema, modelObjectElement);

        jsonArray.push(tempElement);
    });
    return jsonArray;
}

exports.getDeeds = function (req, deedName, callback) {
    try {
        User.findOne({"email": "revanthpenugonda@gmail.com"}, function (err, profile) {
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

}



//Trying to Eliminate these Redundant Methods by adding a simpler single Method
/*
exports.getEducation = function(req,callback){
    try {
    User.findOne({"email": "revanthpenugonda@gmail.com"},function(err,profile) {
            if (err) {
            console.log(err);
            callback(err, null);
            } else if (profile === null) {
            console.log("No User Found");
                callback(new Error("No User Found"),null);           
            } else {
            var educationData = profile.education.educationData;
            var ourSchema = getSchemas(strings.EDUCATION);
            var toSendArray = getArrayJSONBuilder(ourSchema,educationData);
            toSendArray.sort(sorter);
            var ind = 1;
            toSendArray.forEach(function(element){
                element.ind = ind;
                ind++;
            });
            var toSend = {
                educationData: toSendArray
            };
            console.log("Sending JSON")
            callback(null, JSON.stringify(toSend));

        }
    })
    } catch (error) {
        callback(error,null);
    }
}


exports.getDeeds = function(req,callback){
    try {
        User.findOne({"email": "revanthpenugonda@gmail.com"},function(err,profile){
            if (err) {
                console.log(err);
                callback(err, null);
            } else if (profile === null){
                console.log("Profile Not found");
                callback(new Error("No User Found"), null);
            } else {
                var returnJSON = {
                    deeds: []
                };
                var certificateData = profile.certificates.certificateData;
                certificateData.forEach(function (certificatesElement) {
                    var YearData = new Date(certificatesElement.year);
                    var monthData = new Date(certificatesElement.month);
                    var returnJSONElement = {
                        startYear: YearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Certificates",
                        activity: certificatesElement.specificActivity,
                        description: certificatesElement.description,
                        customId: certificatesElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);  
                }, this);
                var takinClassesData = profile.takingClasses.takingClassesData;
                takinClassesData.forEach(function (takingClassesElement){
                    var yearData = new Date(takingClassesElement.year); 
                    var monthData = new Date(takingClassesElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Taking Classes",
                        activity: takingClassesElement.specificActivity,
                        description: takingClassesElement.description,
                        customId: takingClassesElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var conductingClassesData = profile.conductingClasses.conductingClassesData;
                conductingClassesData.forEach(function (conductingClassesElement){   
                    var yearData = new Date(conductingClassesElement.year);
                    var monthData = new Date(conductingClassesElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Conducting Classes",
                        activity: conductingClassesElement.specificActivity,
                        description: conductingClassesElement.description,
                        customId: conductingClassesElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var mentoringData = profile.mentoring.mentoringData;
                mentoringData.forEach(function (mentoringElement){
                    var yearData = new Date(mentoringElement.year);
                    var monthData = new Date(mentoringElement.month);                       
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Mentoring",
                        activity: mentoringElement.specificActivity,
                        description: mentoringElement.description,
                        customId: mentoringElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var writingsData = profile.writings.writingsData;
                writingsData.forEach(function (writingsElement){   
                    var yearData = new Date(writingsElement.year);
                    var monthData = new Date(writingsElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Writing",
                        activity: writingsElement.specificActivity,
                        description: writingsElement.description,
                        customId: writingsElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var confrencesData = profile.conferences.confrenceData;
                confrencesData.forEach(function (confrenceElement) {
                    var yearData = new Date(confrenceElement.year);
                    var monthData = new Date(confrenceElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Conferences",
                        activity: confrenceElement.specificActivity,
                        description: confrenceElement.description,
                        customId: confrenceElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var awardsData = profile.awards.awardsData;
                awardsData.forEach(function (awardElement) {
                    var yearData = new Date(awardElement.year);
                    var monthData = new Date(awardElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Awards",
                        activity: awardElement.specificActivity,
                        description: awardElement.description,
                        customId: awardElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var recognizedExpertiseData = profile.recognizedExpertise.recognizedExpertiseData;
                recognizedExpertiseData.forEach(function (recognizedExpertiseElement){   
                    var yearData = new Date(recognizedExpertiseElement.year);
                    var monthData = new Date(recognizedExpertiseElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Recognized Expertise",
                        activity: recognizedExpertiseElement.specificActivity,
                        description: recognizedExpertiseElement.description,
                        customId: recognizedExpertiseData.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var patentsData = profile.patents.patentsData;
                patentsData.forEach(function (patentsElement){
                    var yearData = new Date(patentsElement.year);
                    var monthData = new Date(patentsElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Patents",
                        activity: patentsElement.specificActivity,
                        description: patentsElement.description,
                        customId: patentsElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var leisureTravelData = profile.leisureTravel.leisureTravelData;
                leisureTravelData.forEach(function (leisureTravelElement){
                    var yearData = new Date(leisureTravelElement.year);
                    var monthData = new Date(leisureTravelElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Leisure Travel",
                        activity: leisureTravelElement.specificActivity,
                        description: leisureTravelElement.description,
                        customId: leisureTravelElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                }, this);
                var languagesData = profile.languages.languagesData;
                languagesData.forEach(function (languagesElement) {
                    var yearData = new Date(languagesElement.year);
                    var monthData = new Date(languagesElement.month);
                    var returnJSONElement = {
                        startYear: yearData.getFullYear(),
                        startMonth: monthData.getMonth(),
                        deedCategory: "Languages",
                        activity: languagesElement.specificActivity,
                        description: languagesElement.description,
                        customId: languagesElement.customId
                    };
                    returnJSON.deeds.push(returnJSONElement);
                }, this);
                callback(null, JSON.stringify(returnJSON));
            }
        });
    } catch (error) {
        callback(error, null);
    }
}

exports.getSkills = function (req, callback){
    try {
        User.findOne({"email": "revanthpenugonda@gmail.com"}, function (err, profile){
            if (err) {
                callback(err, null);
            } else if (profile === null) {
                callback(new Error("Profile Not found", null));
            } else {
                var skillsData = profile.skills.skillsData;
                var returnJSON = {skillsData: []};
                skillsData.forEach(function (skillElement) {
                    var returnJSONElement = {
                        customId: skillElement.customId,
                        category: skillElement.category,
                        softwareDeviceName: skillElement.softwareDeviceName,
                        numberOfLinkedEndorsments: skillElement.numberOfLinkedEndorsments,
                        formalCertification: skillElement.formalCertification,
                        usagein3Years: skillElement.usagein3Years
                    };
                    returnJSON.skillsData.push(returnJSONElement);
                }, this);
                callback(null, JSON.stringify(returnJSON));
            }
        });
    } catch (error) {
        callback(error, null);
    }
}

exports.getTools = function (req, callback){
    try{
        User.findOne({"email": "revanthpenugonda@gmail.com"},function (err, profile) {
            if (err) {
                callback(err, null);
            } else if (profile === null) {
                callback(new Error("Profile Not Found"), null);
            } else {
                var toolsData = profile.tools.toolsData;
                var returnJSON = {toolsData: []};
                toolsData.forEach(function (toolsElement) {
                    var returnJSONElement = {
                        customId: toolsElement.customId,
                        category: toolsElement.category,
                        methodSkillName: toolsElement.methodSkillName,
                        vendorDistributor: toolsElement.vendorDistributor,
                        numberOfLinkedEndorsments: toolsElement.numberOfLinkedEndorsments,
                        currentProficiency: toolsElement.currentProficiency,
                        formalCertification: toolsElement.formalCertification,
                        usagein3Years: toolsElement.usagein3Years
                    };
                    returnJSON.toolsData.push(returnJSONElement);
                });
                callback(null, JSON.stringify(returnJSON));
            }
        });
    } catch (error) {
        callback(error, null);
    }
}

exports.getWorkExperience = function(req,callback){
    try{

    } catch(error){
        callback(error,null);
    }
}
*/