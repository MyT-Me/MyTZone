'use strict';
var User = models.User;

MyTTop_Headers = {
        "ProjectManagement": computeProjectManagementScore,
        "OrganizationalDesign": getOrganizationalDesignScore,
        "Communications": getCommunicationsScore,
        "CriticalThinking": getCriticalThinkingScore,
        "Teamwork": getTeamworkScore,
        "Networking": getNetworkingScore,
        "Empathy": getEmpathyScore,
        "Perspective": getPerspectiveScore,
        "GlobalUnderstandng": getGlobalUnderstandngScore
}

MyTStem_Headers = {
        "MembershipsAuthorshipsRecognitions" : getMembershipAuthorshipsRecognitionsScore,
        "EducationDegreesCertifications": getEducationDegreesCertificationsScore,
        "OperationsResponsibilitiesExpertise": getOperationsResponsibilitiesExpertiseScore,
        "SoftwareDeviceProficiency": getSoftwareDeviceProficiencyScore,
        "MethodsSkillsProficiency": getMethodsSkillsProficiencyScore
}




// All the T Top Scoring Engines
var computeProjectManagementScore = function(userProfile) {
        return 0;
};

var getOrganizationalDesignScore = function(userProfile) {
        return 0;
};

var getCommunicationsScore = function(userProfile) {
        return 0;
};

var getCriticalThinkingScore = function(userProfile) {
        return 0;
};

var getTeamworkScore = function(userProfile) {
        return 0;
};

var getNetworkingScore = function(userProfile) {
        return 0;
};

var getEmpathyScore = function(userProfile) {
        return 0;
};

var getPerspectiveScore = function(userProfile) {
        return 0;
};

var getGlobalUnderstandngScore = function(userProfile) {
        return 0;
};


//All the T STem SCore ComputingEngines
var getMembershipAuthorshipsRecognitionsScore = function(userProfile) {
        return 0;
}

var getEducationDegreesCertificationsScore = function(userProfile) {
        return 0;
};

var getOperationsResponsibilitiesExpertiseScore = function(userProfile) {
        return 0;
};

var getSoftwareDeviceProficiencyScore = function(userProfile) {
        return 0;
};

var getMethodsSkillsProficiencyScore = function(userProfile) {
        return 0;
};

var myTTopScorer  = function(userData){
    returnJSON = {};
    for( var key in MyTTop_Headers) {
        returnJSON[key] = MyTTop_Headers[key](userData);
    }
    return returnJSON
}

var myTStemScorer = function(userData){
    returnJSON = {};
    for(var key in MyTStem_Headers) {
        returnJSON[key] = MyTStem_Headers[key](userData);
    }
    return returnJSON
}

var myTScorer = function(myT_Top,myT_Stem){
        return 0
}

exports.scorer = function(req,callback){
    try {
        console.log("Trying to Access User Data");
           /*
                Uncomment when it gets working with different users
                if(!req.user){
                callback(new Error("Internal error"),null);
                return;
                }
                var userEmail = req.user.emmail;
           */
        User.findOne({"email": /*userEmail*/"revanthpenugonda@gmail.com"},function(err,profile){
            if (err) {
                callback(err,null);
            } else if (profile === null){
                console.log("No user Found");
                callback (new Error("No User Found"), null);
            } else {
                var returnJSON = {};
                returnJSON['MyT_Top'] = myTTopScorer (profile);
                returnJSON['MyT_Stem'] = myTStemScorer (profile);
                returnJSON['MYT_Score'] = 
                callback(null, returnJSON);
            }
        });
        } catch (err) {
        callback (err, null);
    }
}