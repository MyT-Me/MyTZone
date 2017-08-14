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
                "type": "number"
            },
            "endYear": {
                "type": "number"
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
    Certificate: {
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

    TakingClasses: {
        "type": "object",
        "title": "Taking Classes",
        "description": "Taking Classes Addition JSON",
        "properties":{
            "specificActivity": {
                            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    ConductingClasses: {
        "type": "object",
        "title": "Conducting Classes",
        "description": "Conducting Classes Addition JSON",
        "properties": {
            "specificActivity": {
                "enum": ["Conduct 1 hour or longer Briefing/Invited lecture",
                        "Conduct 1 - 2 day briefing/workshop",
                        "Conduct 3 - 5 day briefing / workshop",
                        "Teaching Assistant /Lab Assistant for Sem/Qtr course",
                        "Teacher for full Semester course"]
            },
            "description": {
                "type": "string"
            },
            "month": {
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    Mentoring: {
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
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    Writing: {
        "type": "object",
        "title": "Writing",
        "description": "Writing Addition JSON",
        "properties": {
            "specificActivity": {
                "enum": ["Regular blog related to professional information",
                        "Reviewed paper - Journal or Conference Proceedings / MS-MA Culminating Project",
                        "Refereed paper / MS-MA Thesis",
                        "White Paper/Book chapter / BS-BA Individual capstone project",
                        "Book author/Editor / PhD-DSc Dissertation",
                        "Internal Tech report / Internal project report / BS-BA team capstone project"]
            },
            "PublicationName": {
                "type": "string"
            },
            "ArticleTitle": {
                "type": "string"
            },
            "month": {
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'PublicationName', 'ArticleTitle', 'month', 'year'],
        "additionalProperties": false
    },
    Confrences: {
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
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'ConferenceSponsor', 'PresentationTitle', 'month', 'year'],
        "additionalProperties": false
    },
    Awards: {
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
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'AwardSponsor', 'AwardTitle', 'month', 'year'],
        "additionalProperties": false
    },
    RecognizedExperties: {
        "type": "object",
        "title": "Recognized Experties",
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
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    Patents: {
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
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    LeisureTravel: {
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
                "type": "number"
            },
            "year": {
                "type": "number"
            }
        },
        "required": ['specificActivity', 'description', 'month', 'year'],
        "additionalProperties": false
    },
    Languages: {
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
                "type": "number"
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

        },
        "required": [],
        "additionalProperties": false
    },
    tools: {
        "type": "object",
        "title": "Tools",
        "description": "Tools Addition JSON",
        "properties": {

        },
        "required": [],
        "additionalProperties": false
    },
    workExperience: {
        "type": "object",
        "title": "Tools",
        "description": "Tools Addition JSON",
        "properties": {

        },
        "required": [],
        "additionalProperties": false
    }
}