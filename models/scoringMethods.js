'use strict';
var models = require('./schema');
var User = models.User;
var scorer = require('../scorecomputer/index');

// MyTTop_Headers = {
//         "ProjectManagement": computeProjectManagementScore,
//         "OrganizationalDesign": getOrganizationalDesignScore,
//         "Communications": getCommunicationsScore,
//         "CriticalThinking": getCriticalThinkingScore,
//         "Teamwork": getTeamworkScore,
//         "Networking": getNetworkingScore,
//         "Empathy": getEmpathyScore,
//         "Perspective": getPerspectiveScore,
//         "GlobalUnderstandng": getGlobalUnderstandngScore
// }

// MyTStem_Headers = {
//         "MembershipsAuthorshipsRecognitions" : getMembershipAuthorshipsRecognitionsScore,
//         "EducationDegreesCertifications": getEducationDegreesCertificationsScore,
//         "OperationsResponsibilitiesExpertise": getOperationsResponsibilitiesExpertiseScore,
//         "SoftwareDeviceProficiency": getSoftwareDeviceProficiencyScore,
//         "MethodsSkillsProficiency": getMethodsSkillsProficiencyScore
// }


exports.scorer = function(req,email,callback){
    try {
        console.log("Trying to Access User Data");
        //Uncomment when it gets working with different users

        User.findOne({"email": email/*"revanthpenugonda@gmail.com"*/},function(err,profile){
            if (err) {
                callback(err,null);
            } else if (profile === null){
                console.log("No user Found");
                callback (new Error("No User Found"), null);
            } else {
                var returnJSON = {};
                scorer(profile,callback)
            }
        });
        } catch (err) {
        callback (err, null);
    }
}