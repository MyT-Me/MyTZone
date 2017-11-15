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
                scorer(profile,callback)
            }
        });
        } catch (err) {
        callback (err, null);
    }
}