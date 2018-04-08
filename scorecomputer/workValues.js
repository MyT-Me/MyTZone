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
                weight : 1, 
                scores: [
                    "years",
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "Consultant/Subject matter expert" : {
                weight : 1, 
                scores: [
                    "years",
                    [0,0,3,10,0,0,1,5,2],
                    null
                ]
            },
            "Team Leader" : {
                weight : 2,
                scores: [
                    "years",
                    [10,0,2,0,5,0,0,3,0],
                    null
                ]
            },
            "Manager" : {
                weight : 3,
                scores: [
                    "years",
                    [10,1,3,0,3,0,1,2,0],
                    null
                ]
            },
            "Executive/Founder" : {
                weight : 5,
                scores: [
                    "years",
                    [3,10,3,2,0,0,0,2,0],
                    null
                ]
            },
            "Fellow" : {
                weight :3,
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
                weight : 1.5,
                scores : [
                    "yes",
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "OR_selectEquipment": {
                weight : 1.5,
                scores : [
                    "yes",
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "OR_selectManagingLabor": {
                weight : 1.5,
                scores : [
                    "yes",
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "OR_determineProcessing": {
                weight : 5,
                scores : [
                    "yes",
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            }
        }
    },
    criticalThinking: {
        contents: {
            "CT_requiredMetoFormGoals": {
                weight : 2,
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            },
            "CT_requiredSystematicApproach": {
                weight : 2,
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            },
            "CT_requiredInquisitive": {
                weight : 1.5,
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            },
            "CT_requiredPrioritize": {
                weight : 2.0,
                scores : [
                    "yes",
                    [0,0,0,5,0,0,0,0,0],
                    null
                ]
            },
            "CT_requiredConfidence": {
                weight : 1.5,
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
                weight : 1,
                scores : [
                    "yes",
                    [2,2,2,10,0,0,0,4,0],
                    null
                ]
            },
            "SOI_selectApplicationsAndSolutions": {
                weight : 2,
                scores : [
                    "yes",
                    [2,0,3,10,0,0,0,5,0],
                    null
                ]
            },
            "SOI_specificApplicationsAndSolutions": {
                weight : 2.0,
                scores : [
                    "yes",
                    [2,4,0,10,0,0,0,4,0],
                    null
                ]
            },
            "SOI_buildApplicationsAndSolutions": {
                weight : 5,
                scores : [
                    "yes",
                    [0,10,2,5,0,0,0,3,0],
                    null
                ]
            },
            "SOI_accessBenifitCostValueSolutions":{
                weight : 2,
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
                weight : 0, 
                scores : [
                    "yes",
                    null,
                    Stem.METHODS_SKILLS_PROFIECIENCY
                ]
            },
            "2-3":{
                weight : 1, 
                scores : [
                    "yes",
                    [0,0,0,0,20,0,0,0,0],
                    null
                ]
            },
            "4-8":{
                weight : 1.5, 
                scores : [
                    "yes",
                    [0,0,0,0,20,0,0,0,0],
                    null
                ]
            },
            ">9":{
                weight : 2, 
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
                weight : 0.5, 
                scores : [
                    "yes",
                    null,
                    Stem.METHODS_SKILLS_PROFIECIENCY
                ]
            },
            "Low":{
                weight : 2,
                scores : [
                    "yes",
                    [2,0,5,0,0,0,3,10,0],
                    null
                ]
            },
            "Moderate":{
                weight : 3,
                scores : [
                    "yes",
                    [2,0,5,0,0,0,3,10,0],
                    null
                ]
            },
            "High":{
                weight : 4,
                scores : [
                    "yes",
                    [2,0,5,0,0,0,3,10,0],
                    null
                ]
            },
            "VeryHigh":{
                weight : 5,
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
                weight : 0.5, 
                scores : [
                    "yes",
                    null,
                    Stem.METHODS_SKILLS_PROFIECIENCY
                ]
            },
            "Low": {
                weight : 2, 
                scores : [
                    "yes",
                    [0,0,3,0,0,0,2,5,10],
                    null
                ]
            },
            "Moderate": {
                weight : 3, 
                scores : [
                    "yes",
                    [0,0,3,0,0,0,2,5,10],
                    null
                ]
            },
            "High": {
                weight : 4, 
                scores : [
                    "yes",
                    [0,0,3,0,0,0,2,5,10],
                    null
                ]
            },
            "VeryHigh": {
                weight : 5, 
                scores : [
                    "yes",
                    [0,0,3,0,0,0,2,5,10],
                    null
                ]
            }
        }
    }
}