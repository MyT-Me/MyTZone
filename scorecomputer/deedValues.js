var apiString = require('../strings')('api');

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
    education: {
        value: apiString.EDUCATION,
        contents: {
            "Degree Awarded": {
                name: 'Earned degree awarded',
                scores: [10.0, 
                    null, 
                    Stem.EDUCATION_BRIEFINGS_TEACHING] 
            },
            "Degree - Add'l field of Study": {
                name: 'Earned degree - additional field of study',
                scores: [12.0, 
                    [0,0,0,5,0,3,2,10,0], 
                    Stem.EDUCATION_BRIEFINGS_TEACHING]
            }
        }
    },
   honors: {
        contents: {
            "Valedictorian": {
                name: "Valedictorian",
                scores: [4.0,
                        null,
                        Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS]
            },
            "Cum Laude" :{
                name: "Cum Laude",
                scores: [2.0,
                        null,
                        Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS]
            },
            "Magna Cum Laude":{
                name: "Magna Cum Laude",
                scores: [3.0,
                        null,
                        Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS]
            },
            "Summa Cum Laude":{
                name: "Summa Cum Laude",
                scores: [4.0,
                        null,
                        Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS]
            }
        }
   },
    certificates: {
        value: apiString.CERTIFICATES,
        contents: {
            "Certification: State/Federal/Professional": {
                name: 'State/Federal Certification',
                scores: [3.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            "License awarded": {
                name: 'State/Federal License awarded',
                scores: [5.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            }
        }
    },
    takingClasses : {
        value: apiString.TAKING_CLASSES,
        contents: {
            "1 - 2 day" :{
                name: '1 - 2 day',
                scores: [0.5,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            "3 - 5 day":{
                name: '3 - 5 day',
                scores: [2.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            "1 - 4 week":{
                name: '1 - 4 week',
                scores: [2.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            "> 4 week / semester course" :{
                name: ' > 4 week / semester course',
                scores: [3.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            } ,
            "Mark for each Certificate of completion received":{
                name: 'Mark for each Certificate of completion received',
                scores: [4.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            }
        }
    },
    conductingClasses: {
        value: apiString.CONDUCTING_CLASSES,
        contents: {
            "Conduct 1 hour or longer Briefing/Invited lecture" : {
                name: 'Conduct 1 hour or longer Briefing/Invited lecture',
                scores: [1.0,
                    [3,0,10,3,0,0,2,2,0],
                    Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            "Conduct 1 - 2 day briefing/workshop" : {
                name: 'Conduct 1 - 2 day briefing/workshop',
                scores: [
                    2.0,
                    [3,0,10,3,0,0,2,2,0],
                    Stem.EDUCATION_BRIEFINGS_TEACHING
                ]
            }, 
            "Conduct 3 - 5 day briefing/workshop" :{
                name: 'Conduct 3 - 5 day briefing / workshop',
                scores: [
                    3.0,
                    [3,0,10,3,0,0,2,2,0],
                    Stem.EDUCATION_BRIEFINGS_TEACHING
                ]
            },
            "Teaching Assistant/Lab Assistant for Sem/Qtr course" : {
                name: 'Teaching Assistant /Lab Assistant for Sem course',
                scores: [
                    3.0,
                    [3,0,10,3,0,0,2,2,0],
                    Stem.EDUCATION_BRIEFINGS_TEACHING
                ]
            },
            "Teacher for full Semester course" : {
                name: 'Teacher for full Semester course',
                scores: [
                    5.0,
                    [3,0,10,3,0,0,2,2,0],
                    Stem.EDUCATION_BRIEFINGS_TEACHING
                ]
            }
        },
    },
    mentoring:{
        value: apiString.MENTORING,
        contents: {
            "Employee/student/colleague": {
                name: 'Employee/student/colleague',
                scores: [
                    2.0,
                    [2,0,3,1,0,0,10,4,0],
                    null
                ]
            },
            "Sponsor student or employee project": {
                name: 'Sponsor student or employee project',
                scores: [
                    1.5,
                    [2,0,3,1,0,0,10,4,0],
                    null
                ]
            },
            "Group leader":{
                name: 'Group leader',
                scores: [
                    5.0,
                    [2,0,3,1,0,0,10,4,0],
                    null
                ]
            }
        },
    },
    awards:{
        value: apiString.AWARDS,
        contents: {
            "Apply for regional competitive grant or contest":{
                name: 'Apply for regional competitive grant or contest',
                scores: [
                    2.0,
                    [3,0,10,4,0,0,0,3,0],
                    null
                ]
            },
            "Apply for national / international grant or contest":{
                name: 'Apply for national/international grant or contest',
                scores: [
                    2.0,
                    [3,0,10,4,0,0,0,3,0],
                    null
                ]
            },
            "Win grant award or place 1st in publication, presentation, or innovation contest":{
                name: 'Win grant award or place 1st in publication, presentation, or innovation contest',
                scores: [
                    4.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Win 2nd or 3rd in publication, presentation, or innovation contest":{
                name: 'Win 2nd or 3rd in publication, presentation, or innovation contest',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Other Local honor or award conferred":{
                name: 'Other Local honor or award conferred',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Other National honor or award conferred":{
                name: 'Other National honor or award conferred',
                scores: [
                    4.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Other International honor or award conferred":{
                name: 'Other International honor or award conferred',
                scores: [
                    3.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            }, 
            "Fellow/Diplomate" : {
                name: 'Fellow/Diplomate',
                scores: [
                    3.0,
                    [0,0,2,0,0,10,3,5,0],
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            }
        }
    },
    conferences:{
        value: apiString.CONFERENCES,
        contents: {
            "Attendee":{
                name: 'Attendee',
                scores: [
                    1.0,
                    [0,0,4,0,0,8,0,4,4],
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Presenter":{
                name: 'Presenter',
                scores: [
                    1.5,
                    [0,0,4,0,0,8,0,4,4],
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Co-author of presentation -no attend":{
                name: 'Co-author of presentation -no attend',
                scores: [
                    0.5,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            }
        },
    },
    writings:{
        value: apiString.WRITINGS,
        contents: {
            "Regular blog related to professional information":{
                name: 'Regular blog related to professional information',
                scores: [
                    1.0,
                    [0,0,10,4,0,0,0,4,2],
                    null
                ]
            },
            "Reviewed paper - Journal or Conference Proceedings/MS-MA Culminating Project":{
                name: 'Reviewed paper - Journal or Conference Proceedings / MS-MA Culminating Project',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Refereed paper/MS-MA Thesis":{
                name: 'Refereed paper / MS-MA Thesis',
                scores: [
                    4.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            EDITORIAL_BOARD_OF_REFEREED_JOURNAL:{
                name: 'Editorial Board of refereed journal',
                scores: [
                    1.0,
                    [0,0,10,4,0,0,2,3,1],
                    null
                ]
            },
            SPECIAL_ISSUE_EDITOR:{
                name: 'Special issue editor',
                scores: [
                    3.0,
                    [3,0,10,3,0,2,0,2,0],
                    null
                ]
            },
            JOURNAL_EDITOR:{
                name: 'Journal editor',
                scores: [
                    4.0,
                    [3,0,10,3,0,2,0,2,0],
                    null
                ]
            },
            "White Paper/Book chapter/BS-BA Individual capstone project":{
                name: 'White Paper/Book chapter / BS-BA Individual capstone project',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Book author/Editor/PhD-DSc Dissertation":{
                name: 'Book author/Editor / PhD-DSc Dissertation',
                scores: [
                    3.0,
                    [2,0,10,3,0,0,0,3,2],
                    null
                ]
            },
            "Internal Tech report/Internal project report/BS-BA team capstone project":{
                name: 'Internal Tech report / Internal project report / BS-BA team capstone project',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            }
        },
    },
    recognizedExpertise:{
        value: apiString.RECOGNIZED_EXPERTISE,
        contents: {
            "Team member": {
                name:'Team member',
                scores: [1.5,
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "Position/Consultancy": {
                name:'Position/Consultancy',
                scores:[2.0,
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "Expert testimony": {
                name: 'Expert testimony',
                scores: [2.0,
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            },
            "Panel/talk/authorship": {
                name: 'Panel/talk/authorship',
                scores: [1.0,
                    null,
                    Stem.OPERATION_RESPONSIBILITIES_EXPERTISE
                ]
            }
        }
    },
    patents:{
        value: apiString.PATENTS,
        contents: {
            "Publish" : {
                name: 'Publish',
                scores: [ 1.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "File": {
                name: 'File',
                scores: [2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Provisional": {
                name: 'Provisional',
                scores: [ 2.5,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            "Award": {
                name: 'Award',
                scores: [
                    3.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            }
        }
    },
    languages:{
        value: apiString.LANGUAGES,
        contents: {
            "Fluent in 2nd language": {
                name: 'Fluent in 2nd language',
                scores: [8.0,
                    [0,0,10,0,0,0,0,5,5],
                    null]
            },
            "Fluent in 3rd language": {
                name: 'Fluent in 3rd language',
                scores: [8.0,
                    [0,0,10,0,0,0,0,5,5],
                    null
                ]
            },
            "Fluent in 4th or more language" : {
                name: 'Fluent in 4th or more language',
                scores: [8.0,
                    [0,0,10,0,0,0,0,5,5],
                    null
                ]
            }
        }
    },
    leisureTravel:{
        value: apiString.LEISURE_TRAVEL,
        contents: {
            "National < 1 month cumulative" : {
                name: "National < 1 month cumulative",
                scores: [2.0,
                        [0,0,5,0,0,0,5,10,0],
                        null]
            },
            "National > 1 month cumulative": {
                name: "National > 1 month cumulative",
                scores: [4.0,
                        [0,0,5,0,0,0,5,10,0],
                        null]
            },
            "International < 2 weeks cumulative": {
                name: "International < 2 weeks cumulative",
                scores: [3.0,
                        [0,0,0,0,0,0,5,5,10],
                        null]
            },
            "International 2 - 4 weeks cumulative": {
                name: "International 2 - 4 weeks cumulative",
                scores: [6.0,
                        [0,0,0,0,0,0,5,5,10],
                        null]
            },
            "International >4 weeks cumulative" :{
                name: "International >4 weeks cumulative",
                scores: [8.0,
                        [0,0,0,0,0,0,5,5,10],
                        null]
            }
        }
    },
}


