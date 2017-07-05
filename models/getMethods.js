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
            if(err){
                console.log(err);
                callback(err,null);
            } else if(profile==null){
                console.log("Profile Not found");
                callback(new Error("No User Found"),null);   
            } else {
                var returnJSON = {
                    deeds:[]
                }
                var certificateData = profile.certificates.certificateData;
                certificateData.forEach(function(certificatesElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);  
                },this);
                var takinClassesData = profile.takingClasses.takingClassesData;
                takinClassesData.forEach(function(takingClassesElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var conductingClassesData = profile.conductingClasses.conductingClassesData;
                conductingClassesData.forEach(function(conductingClassesElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var mentoringData = profile.mentoring.mentoringData;
                mentoringData.forEach(function(mentoringElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var writingsData = profile.writings.writingsData;
                writingsData.forEach(function(writingsElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var confrencesData = profile.conferences.confrenceData;
                confrencesData.forEach(function(confrenceElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var awardsData = profile.awards.awardsData;
                awardsData.forEach(function(awardElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var recognizedExpertiseData = profile.recognizedExpertise.recognizedExpertiseData;
                recognizedExpertiseData.forEach(function(recognizedExpertiseElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var patentsData = profile.patents.patentsData;
                patentsData.forEach(function(patentsElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var leisureTravelData = profile.leisureTravel.leisureTravelData;
                leisureTravelData.forEach(function(leisureTravelElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);
                var languagesData = profile.languages.languagesData;
                languagesData.forEach(function(languagesDataElement){
                    var returnJSONElement = {
                    }
                    returnJSON.deeds.push(returnJSONElement);
                },this);  
                callback(null,JSON.stringify(returnJSON));
            }
        })
    } catch (error) {
        callback(error,null);
    }
}


