var models = require('./schema');
var User = models.User;

exports.getEducation = function(req,callback){
    try {
        User.findOne({"email": "revanthpenugonda@gmail.com"},function(err,profile){
        if(err){
            console.log(err);
            callback(err,null);
        } else if(profile == null) {
            console.log("No User Found");
            callback(new Error("No User Found"),null);           
        } else {
            var educationData = profile.education.educationData;
            var toSend = {educationData:[]}
            educationData.forEach(function(element) {
                console.log("Each Element");
                console.log(element);
                var startYearDate = new Date(element.startYear);
                var endYearDate = new Date(element.yearAwarded);
                var toSendElement = {
                    schoolName: element.schoolName,
                    fieldOfStudy: element.fieldOfStudy,
                    typeOfProgram: element.typeOfProgram,
                    startYear: startYearDate.getFullYear(),
                    yearAwarded: endYearDate.getFullYear(),
                    programStatus: element.programStatus,
                    honors: element.honors,
                    customId: element.customId
                }
                toSend.educationData.push(toSendElement);
            }, this);
            callback(null,JSON.stringify(toSend));
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
