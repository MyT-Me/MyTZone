module.exports = {
    education: {
        "type": "object",
        "title": "Education",
        "description": "Education Addition JSON",
        "properties":{
            "schoolUniversityName": {
                "type": "string"
            },
            "majorFiedOfStudy": {
                "type": "string"
            },
            "typeOfDegree": {
                "enum": ["High School diploma",
                        "Certificate",
                        "BS",
                        "BA",
                        "MS",
                        "MA",
                        "ph.D",
                        "MBA",
                        "MD",
                        "LLD"]
            },
            "startYear": {
                "type": ["number", "string"]
            },
            "endYear": {
                "type": ["number", "string"]
            },
            "degreeProgramStatus": {
                "enum": ["In progress",
                        "Degree Awarded",
                        "Degree - Add'l field of Study"]
            },
            "honors": {
                "enum": ["Valedictorian",
                        "Cum Laude",
                        "Magna Cum Laude",
                        "Summa Cum Laude"]
            }
        },
        "required": ['schoolUniversityName', 'majorFiedOfStudy', 'typeOfDegree', 'startYear', 'degreeProgramStatus'],
        "additionalProperties": false
    },
    certificates: {
        "type": "object",
        "title": "Certificate",
        "description": "Certificate Addition JSON",
        "properties":{
            "specificActivity": {
                "enum": ["Certification: State/Federal/Professional",
                        "License awarded"]
            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },

    takingClasses: {
        "type": "object",
        "title": "Taking Classes",
        "description": "Taking Classes Addition JSON",
        "properties":{
            "specificActivity": {
                "enum": ["1 - 2 day",
                        "3 - 5 day",
                        "1 - 4 week",
                        "> 4 week / semester course",
                        "Mark for each Certificate of completion received"]
                            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    conductingClasses: {
        "type": "object",
        "title": "Conducting Classes",
        "description": "Conducting Classes Addition JSON",
        "properties": {
            "specificActivity": {
                "enum": ["Conduct 1 hour or longer Briefing/Invited lecture",
                        "Conduct 1 - 2 day briefing/workshop",
                        "Conduct 3 - 5 day briefing/workshop",
                        "Teaching Assistant/Lab Assistant for Sem/Qtr course",
                        "Teacher for full Semester course"]
            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    mentoring: {
        "type": "object",
        "title": "Mentoring",
        "description": "Mentoring Addition JSON",
        "properties": {
            "specificActivity": {
                "enum": ["Employee/student/colleague",
                        "Sponsor student or employee project",
                        "Group leader"]
            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    writings: {
        "type": "object",
        "title": "Writing",
        "description": "Writing Addition JSON",
        "properties": {
            "specificActivity": {
                "enum": ["Regular blog related to professional information",
                        "Reviewed paper - Journal or Conference Proceedings/MS-MA Culminating Project",
                        "Refereed paper/MS-MA Thesis",
                        "White Paper/Book chapter/BS-BA Individual capstone project",
                        "Book author/Editor/PhD-DSc Dissertation",
                        "Internal Tech report/Internal project report/BS-BA team capstone project"]
            },
            "PublicationName": {
                "type": "string"
            },
            "ArticleTitle": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'PublicationName', 'ArticleTitle', 'month', 'year'],
        "additionalProperties": false
    },
    conferences: {
        "type": "object",
        "title": "Confrences",
        "description": "Confrences Addition JSON",
        "properties":{
            "specificActivity": {
                "enum": ["Attendee",
                        "Presenter",
                        "Co-author of presentation -no attend"]
            },
            "ConferenceSponsor": {
                "type": "string"
            },
            "PresentationTitle": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'ConferenceSponsor', 'PresentationTitle', 'month', 'year'],
        "additionalProperties": false
    },
    awards: {
        "type": "object",
        "title": "Awards",
        "description": "Awards Addition JSON",
        "properties":{
            "specificActivity":{
                "enum": ["Apply for regional competitive grant or contest",
                        "Apply for national / international grant or contest",
                        "Win grant award or place 1st in publication, presentation, or innovation contest",
                        "Win 2nd or 3rd in publication, presentation, or innovation contest",
                        "Other Local honor or award conferred",
                        "Other National honor or award conferred",
                        "Other International honor or award conferred",
                        "Fellow/Diplomate"]
            },
            "AwardSponsor": {
                "type": "string"
            },
            "AwardTitle": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'AwardSponsor', 'AwardTitle', 'month', 'year'],
        "additionalProperties": false
    },
    recognizedExpertise: {
        "type": "object",
        "title": "Recognized Expertise",
        "description": "Education Addition JSON",
        "properties": {
            "specificActivity":{
                "enum": ["Team member",
                        "Position/Consultancy",
                        "Expert testimony",
                        "Panel/talk/authorship"]
            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    patents: {
        "type": "object",
        "title": "Patents",
        "description": "Patents Addition JSON",
        "properties": {
            "specificActivity": {
                "enum": ["Publish",
                        "File",
                        "Provisional",
                        "Award"]
            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    leisureTravel: {
        "type": "object",
        "title": "Leisure Travel",
        "description": "Leisure Travel Addition JSON",
        "properties": {
            "specificActivity": {
                "enum": ["National < 1 month cumulative",
                        "National > 1 month cumulative",
                        "International < 2 weeks cumulative",
                        "International 2 - 4 weeks cumulative",  
                        "International >4 weeks cumulative"]
            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    languages: {
        "type": "object",
        "title": "Languages",
        "description": "Languages Addition JSON",
        "properties": {
            "specificActivity":{
                "enum": ["Fluent in 2nd language",
                        "Fluent in 3rd language",
                        "Fluent in 4th or more language"]
            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "string"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    skills: {
        "type": "object",
        "title": "Skills",
        "description": "Skills Addition JSON",
        "properties": {
            "category": {
                "enum": ["Professional Methods / Skills", "Personal Enrichment Skills"]
            },
            "softwareDeviceName": {
                "type": "string"
            },
            "vendorDistributor": {
                "type": "string"
            },
            "numberOfLinkedEndorsments": {
                "type": "number"
            },
            "proficiencyType": {
                "enum": ["basic", "inter", "advanced", "expert"]
            },
            "proficiencyYear": {
                "type": "number"
            },
            "formalCertification": {
                "type": "boolean"
            },
            "usagein3Years": {
                "type": "boolean"
            }
        },
        "required": ["category", "softwareDeviceName", "vendorDistributor", "numberOfLinkedEndorsments", "proficiencyType", "proficiencyYear", "formalCertification", "usagein3Years"],
        "additionalProperties": false
    },
    tools: {
        "type": "object",
        "title": "Tools",
        "description": "Tools Addition JSON",
        "properties": {
            "category": {
                "enum": ["Software - USER", "Software - Programming", "Device Operation"]
            },
            "softwareDeviceName": {
                "type": "string"
            },
            "vendorDistributor": {
                "type": "string"
            },
            "numberOfLinkedEndorsments": {
                "type": "number"
            },
            "proficiencyType": {
                "enum": ["basic", "inter", "advanced", "expert"]
            },
            "proficiencyYear": {
                "type": "number"
            },
            "formalCertification": {
                "type": "boolean"
            },
            "usagein3Years": {
                "type": "boolean"
            }
        },
        "required": ["category", "softwareDeviceName", "vendorDistributor", "numberOfLinkedEndorsments", "proficiencyType", "proficiencyYear", "formalCertification", "usagein3Years"],
        "additionalProperties": false
    },

    workExperience: {
        "type": "object",
        "title": "Work Experience Schema",
        "description": "Work Experience Addition JSON",
        "definitions":{
            "PromptAnswers": {
                "enum":['yes','some','no']
            },
            "operationsResponsibilities": {
                "type": "object",
                "properties": {
                    "OR_selectLocations": {"$ref":"#/definitions/PromptAnswers"},
                    "OR_selectEquipment": {"$ref":"#/definitions/PromptAnswers"},
                    "OR_selectManagingLabor": {"$ref":"#/definitions/PromptAnswers"},
                    "OR_determineProcessing":{"$ref":"#/definitions/PromptAnswers"}
                },
                "required": ["OR_selectLocations",
                            "OR_selectEquipment",
                            "OR_selectManagingLabor",
                            "OR_determineProcessing"],
                "additionalProperties": false
            },
            "criticalThinking":{
                "type": "object",
                "properties":{
                    "CT_requiredMetoFormGoals": {"$ref":"#/definitions/PromptAnswers"},
                    "CT_requiredSystematicApproach": {"$ref":"#/definitions/PromptAnswers"},
                    "CT_requiredInquisitive": {"$ref":"#/definitions/PromptAnswers"},
                    "CT_requiredPrioritize": {"$ref":"#/definitions/PromptAnswers"},
                    "CT_requiredConfidence": {"$ref":"#/definitions/PromptAnswers"}
                },
                "required": ["CT_requiredMetoFormGoals",
                            "CT_requiredSystematicApproach",
                            "CT_requiredInquisitive",
                            "CT_requiredPrioritize",
                            "CT_requiredConfidence"],
                "additionalProperties": false
            },
            "systemAndOperationInnovation":{
                "type": "object",
                "properties":{
                    "SOI_evaluateApplications": {"$ref":"#/definitions/PromptAnswers"},
                    "SOI_selectApplicationsAndSolutions": {"$ref":"#/definitions/PromptAnswers"},          
                    "SOI_specificApplicationsAndSolutions": {"$ref":"#/definitions/PromptAnswers"},
                    "SOI_buildApplicationsAndSolutions": {"$ref":"#/definitions/PromptAnswers"},
                    "SOI_accessBenifitCostValueSolutions": {"$ref":"#/definitions/PromptAnswers"}
                },
                "required": ["SOI_evaluateApplications",
                            "SOI_selectApplicationsAndSolutions",
                            "SOI_specificApplicationsAndSolutions",
                            "SOI_buildApplicationsAndSolutions",
                            "SOI_accessBenifitCostValueSolutions"],
                "additionalProperties": false
            }
        },
        "properties": {
           "employerSectionOfFocus" :{
            "enum":[
                "Agriculture",
                "Building & Construction",
                "Education",
                "Entertainment",
                "Energy & Electric",
                "Financial & Business Consulting",
                "Fitness and Well Being",
                "Government",
                "Health Care Delivery",
                "Hospitality",
                "Information & Communications Technology",
                "Manufacturing",
                "Religious",
                "Retail",
                "Social",
                "Trade/Professional",
                "Water & Utilities",
                "Other",
            ]
           },
           "employerOrganizationName" :{
            "type": "string"
           },
           "locationRegion" :{
            "enum": [
                "North America",
                "Caribbean",
                "Central America",
                "South America",
                "Eastern Africa",
                "Middle Africa",
                "North Africa",
                "Western Africa",
                "Sub Saharan Africa",
                "Eastern Asia",
                "Central Asia",
                "South-Eastern Asia",
                "Western Asia (Middle East)",
                "Central Asia",
                "Southern Asia",
                "Eastern Europe",
                "Northern Europe",
                "Southern Europe",
                "Western Europe",
                "Austrailia/New Zealand",
                "Melanesia",
                "Micronesia",
                "Polynesia",
            ]
           },
           "startDate" :{
            "type": "number"
           },
           "endDate" :{
            "type": "number"
           }, 
           "startMonth" :{
            "type": "string"
           },
           "endMonth" :{
            "type": "string"
           }, 
           "positionDescription" :{
            "type": "string"
           },
           "role" :{
            "enum": [
                "Employee",
                "Team Leader",
                "Manager",
                "Executive/Founder",
                "Consultant/Subject matter expert",
                "Board of Dir",
                "Member(Student or Full membership)",
                "Local or student committee",
                "Local or student officer",
                "National Committee",
                "National Officer",
                "Fellow"
            ]
           },
           "primaryFunction" :{
               "enum": [
                   "Business Development",
                   "Consulting - External",
                   "Consulting - Internal",
                   "CSR Corporate Social Responsibility",
                   "Customer Service (Student/Patient/Client/Member)",
                   "Education",
                   "Engineering  - Software",
                   "Engineering - Products/Services",
                   "Engineering - Structures",
                   "Finance and Accounting",
                   "Headquarters & Administration",
                   "Health / Safety",
                   "Human Resources",
                   "Information Technology",
                   "Innovation",
                   "Legal",
                   "Operations",
                   "Public Relations",
                   "Quality",
                   "Research and Development",
                   "Sales",
                   "Strategy",
                   "Supply Chain",
                   "Other"
               ]
           },
           "teamSize" :{
               "enum":[
                   "1",
                    "2-3",
                    "4-8",
                    ">9"
                ]
           },
           "multiDisciplinaryMakeup" :{
               "enum":[
                   "Very low",
                   "Low",
                   "Moderate",
                   "High",
                   "VeryHigh"
                ]
           },
           "multiCulturalMakeup" :{
            "enum":[
                "Very low",
                "Low",
                "Moderate",
                "High",
                "VeryHigh",
             ]
           },
           "operationsResponsibilities":{"$ref":"#/definitions/operationsResponsibilities"},
           "criticalThinking": {"$ref":"#/definitions/criticalThinking"},
           "systemAndOperationInnovation": {"$ref":"#/definitions/systemAndOperationInnovation"},
           "paidUnpaid" :{
               "enum":[
                   "Profit-paid",
                   "Non-profit-Paid",
                   "Profit-unpaid",
                   "Non-profit-Unpaid",
               ]
           }
        },
        "required": ["employerSectionOfFocus","employerOrganizationName",],
        "additionalProperties": false
    }
}