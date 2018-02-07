var top = {
    PROJECT_MANAGEMENT: 'Project management',
    ORGANIZATIONAL_DESIGN: 'Organizational design',
    COMMUNICATIONS: 'Communications',
    CRITICAL_THINKING: 'Critical Thinking',
    TEAMWORK: 'Teamwork',
    NETWORKING: 'Networking',
    EMPATHY: 'Empathy',
    PERSPECTIVE: 'Perspective',
    GLOBAL_UNDERSTANDING: 'Global understandng'
}

var Stem = {
    MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS: 'Memberships, Authorships, and Recognitions',
    EDUCATION_BRIEFINGS_TEACHING: 'Education, Briefings, and Teaching',
    OPERATION_RESPONSIBILITIES_EXPERTISE: 'Operations responsibilities and expertise',
    SOFTWARE_DEVICE_PROFICIENCY: 'Software/Device Profixciency',
    METHODS_SKILLS_PROFIECIENCY: 'Methods/Skills Proficiency'
}


module.exports = {
    role: {
        contents: {
            "Employee" : {
                scores: [
                    "years",
                    [0,0,0,0,0,0,0,0,0],
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "Consultant/Subject matter expert" : {
                scores: [
                    "years",
                    [0,0,3,10,0,0,1,5,2],
                    null
                ]
            },
            "Team Leader" : {
                scores: [
                    "years",
                    [10,0,2,0,5,0,0,3,0],
                    null
                ]
            },
            "Manager" : {
                scores: [
                    "years",
                    [10,1,3,0,3,0,1,2,0],
                    null
                ]
            },
            "Executive/Founder" : {
                scores: [
                    "years",
                    [3,10,3,2,0,0,0,2,0],
                    null
                ]
            },
            "Fellow" : {
                scores: [
                    "years",
                    [0,0,5,0,3,5,3,4,0],
                    null
                ]
            }
        }
    },
    operationsResponsibilities: {
        contents: {
            "OR_selectLocations": {
                scores : [
                    "yes",
                    [0,0,0,0,0,0,0,0,0],
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "OR_selectEquipment": {
                scores : [
                    "yes",
                    [0,0,0,0,0,0,0,0,0],
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "OR_selectManagingLabor": {
                scores : [
                    "yes",
                    [0,0,0,0,0,0,0,0,0],
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "OR_determineProcessing": {
                scores : [
                    "yes",
                    [0,0,0,0,0,0,0,0,0],
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            }
        }
    },
    criticalThinking: {
        contents: {
            "CT_requiredMetoFormGoals": {
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            },
            "CT_requiredSystematicApproach": {
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            },
            "CT_requiredInquisitive": {
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            },
            "CT_requiredPrioritize": {
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            },
            "CT_requiredConfidence": {
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            }
        }
    },
    systemAndOperationInnovation: {
        contents: {
            "SOI_evaluateApplications": {
                scores : [
                    "yes",
                    [2,2,2,10,0,0,0,4,0],
                    null
                ]
            },
            "SOI_selectApplicationsAndSolutions": {
                scores : [
                    "yes",
                    [2,0,3,10,0,0,0,5,0],
                    null
                ]
            },
            "SOI_specificApplicationsAndSolutions": {
                scores : [
                    "yes",
                    [2,4,0,10,0,0,0,4,0],
                    null
                ]
            },
            "SOI_buildApplicationsAndSolutions": {
                scores : [
                    "yes",
                    [0,10,2,5,0,0,0,3,0],
                    null
                ]
            },
            "SOI_accessBenifitCostValueSolutions":{
                scores : [
                    "yes",
                    [0,10,2,4,0,0,0,3,0],
                    null
                ]
            }
        }
    },
    teamSize: {
        contents: {
            "1":{
                scores : [
                    "yes",
                    [0,0,0,0,0,0,0,0,0],
                    Stem.METHODS_SKILLS_PROFIECIENCY
                ]
            },
            "2-3":{
                scores : [
                    "yes",
                    [0,0,0,0,20,0,0,0,0],
                    null
                ]
            },
            "4-8":{
                scores : [
                    "yes",
                    [0,0,0,0,20,0,0,0,0],
                    null
                ]
            },
            ">9":{
                scores : [
                    "yes",
                    [0,0,0,0,20,0,0,0,0],
                    null
                ]
            }
        }
    },
    multiDisciplinaryMakeup: {
        contents: {
            "Very low": {
                scores : [
                    "yes",
                    [0,0,0,0,0,0,0,0,0],
                    Stem.METHODS_SKILLS_PROFIECIENCY
                ]
            },
            "Low":{
                scores : [
                    "yes",
                    [2,0,5,0,0,0,3,10,0],
                    null
                ]
            },
            "Moderate":{
                scores : [
                    "yes",
                    [2,0,5,0,0,0,3,10,0],
                    null
                ]
            },
            "High":{
                scores : [
                    "yes",
                    [2,0,5,0,0,0,3,10,0],
                    null
                ]
            },
            "VeryHigh":{
                scores : [
                    "yes",
                    [2,0,5,0,0,0,3,10,0],
                    null
                ]
            }
        }
    },
    multiCulturalMakeup: {
        contents: {
            "Very low": {
                scores : [
                    "yes",
                    [0,0,0,0,0,0,0,0,0],
                    Stem.METHODS_SKILLS_PROFIECIENCY
                ]
            },
            "Low": {
                scores : [
                    "yes",
                    [0,0,3,0,0,0,2,5,10],
                    null
                ]
            },
            "Moderate": {
                scores : [
                    "yes",
                    [0,0,3,0,0,0,2,5,10],
                    null
                ]
            },
            "High": {
                scores : [
                    "yes",
                    [0,0,3,0,0,0,2,5,10],
                    null
                ]
            },
            "VeryHigh": {
                scores : [
                    "yes",
                    [0,0,3,0,0,0,2,5,10],
                    null
                ]
            }
        }
    }

}