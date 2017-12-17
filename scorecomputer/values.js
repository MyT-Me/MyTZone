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
    SOFTWARE_DEVICE_PROFICIENCY: 'Software/Device Proficiency',
    METHODS_SKILLS_PROFIECIENCY: 'Methods/Skills Proficiency'
}

/*
Copiers
value: '',
contents: {

}
====================
{
    name: '',
    scores: []
}
*/

module.exports = {
    education: {
        value: apiString.EDUCATION,
        contents: {
            "Degree Awarded": {
                name: "Degree Awarded",
                scores: [10.0, 
                    null,
                    Stem.EDUCATION_BRIEFINGS_TEACHING] 
            },
            "Degree - Add'l field of Study": {
                name: "Degree - Add'l field of Study",
                scores: [12.0, [0,0,0,5,0,3,2,10,0], Stem.EDUCATION_BRIEFINGS_TEACHING]
            }
        }
    },
    certificates: {
        value: apiString.CERTIFICATES,
        contents: {
            STATE_FEDERAL_CERTIFICATION: {
                name: 'State/Federal Certification',
                scores: [3.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            STATE_FEDERAL_LICENSE_AWARDED: {
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
            _1_2_DAY :{
                name: '1 - 2 day',
                scores: [0.5,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            _3_5_DAY:{
                name: '3 - 5 day',
                scores: [2.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            _1_4_WEEK:{
                name: '1 - 4 week',
                scores: [2.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            },
            GT_4_WEEK :{
                name: ' > 4 week / semester course',
                scores: [3.0,
                null,
                Stem.EDUCATION_BRIEFINGS_TEACHING]
            } ,
            MARK_FOR_EACH_CERTIFICATE_OF_COMPLETION_RECEIVED:{
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
            CONDUCT_1_HOUR_OR_LONGER_BRIEFING_INVITED_LECTURE : {
                name: 'Conduct 1 hour or longer Briefing/Invited lecture',
                scores: [1.0,
                    [],
                    null]
            },
            CONDUCT_1_2_DAY_BRIEFING_WORKSHOP : {
                name: 'Conduct 1 - 2 day briefing/workshop',
                scores: [
                    2.0,
                    [],
                    null
                ]
            }, 
            CONDUCT_3_5_DAY_BRIEFING_WORKSHOP :{
                name: 'Conduct 3 - 5 day briefing / workshop',
                scores: [
                    3.0,
                    [],
                    null
                ]
            },
            TEACHING_ASSISTANT_LAB_ASSISTANT_FOR_SEM : {
                name: 'Teaching Assistant /Lab Assistant for Sem course',
                scores: [
                    3.0,
                    [],
                    null
                ]
            },
            TEACHER_FOR_FULL_SEMESTER_COURSE : {
                name: 'Teacher for full Semester course',
                scores: [
                    5.0,
                    [],
                    null
                ]
            }
        },
    },
    mentoring:{
        value: apiString.MENTORING,
        contents: {
            EMPLOYEE_STUDENT_COLLEAGUE: {
                name: 'Employee/student/colleague',
                scores: [
                    2.0,
                    [],
                    null
                ]
            },
            SPONSOR_STUDENT_OR_EMPLOYEE_PROJECT: {
                name: 'Sponsor student or employee project',
                scores: [
                    1.5,
                    [],
                    null
                ]
            },
            GROUP_LEADER:{
                name: 'Group leader',
                scores: [
                    5.0,
                    [],
                    null
                ]
            }
        },
    },
    awards:{
        value: apiString.AWARDS,
        contents: {
            APPLY_FOR_REGIONAL_COMPETITIVE_GRANT_OR_CONTEST:{
                name: 'Apply for regional competitive grant or contest',
                scores: [
                    2.0,
                    [],
                    null
                ]
            },
            APPLY_FOR_NATIONAL_INTERNATIONAL_GRANT_OR_CONTEST:{
                name: 'Apply for national/international grant or contest',
                scores: [
                    2.0,
                    [],
                    null
                ]
            },
            WIN_GRANT_AWARD_OR_PLACE_1ST_IN_PUBLICATION_PRESENTATION_OR_INNOVATION_CONTEST:{
                name: 'Win grant award or place 1st in publication, presentation, or innovation contest',
                scores: [
                    4.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            WIN_2ND_OR_3RD_IN_PUBLICATION_PRESENTATION_OR_INNOVATION_CONTEST:{
                name: 'Win 2nd or 3rd in publication, presentation, or innovation contest',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            OTHER_LOCAL_HONOR_OR_AWARD_CONFERRED:{
                name: 'Other Local honor or award conferred',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            OTHER_NATIONAL_HONOR_OR_AWARD_CONFERRED:{
                name: 'Other National honor or award conferred',
                scores: [
                    4.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            OTHER_INTERNATIONAL_HONOR_OR_AWARD_CONFERRED:{
                name: 'Other International honor or award conferred',
                scores: [
                    3.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            }
        }
    },
    confrences:{
        value: apiString.CONFERENCES,
        contents: {
            ATTENDEE:{
                name: 'Attendee',
                scores: [
                    0.5,
                    [],
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            PRESENTER:{
                name: 'Presenter',
                scores: [
                    1.0,
                    [],
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            CO_AUTHOR_OF_PRESENTATION_NO_ATTEND:{
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
            REGULAR_BLOG_RELATED_TO_PROFESSIONAL_INFORMATION:{
                name: 'Regular blog related to professional information',
                scores: [
                    1.0,
                    [],
                    null
                ]
            },
            REVIEWED_PAPER_JOURNAL_OR_CONFERENCE_PROCEEDINGS_MS_MA_CULMINATING_PROJECT:{
                name: 'Reviewed paper - Journal or Conference Proceedings / MS-MA Culminating Project',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            REFEREED_PAPER_MS_MA_THESIS:{
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
                    [],
                    null
                ]
            },
            SPECIAL_ISSUE_EDITOR:{
                name: 'Special issue editor',
                scores: [
                    3.0,
                    [],
                    null
                ]
            },
            JOURNAL_EDITOR:{
                name: 'Journal editor',
                scores: [
                    4.0,
                    [],
                    null
                ]
            },
            WHITE_PAPER_BOOK_CHAPTER_BS_BA_INDIVIDUAL_CAPSTONE_PROJECT:{
                name: 'White Paper/Book chapter / BS-BA Individual capstone project',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            },
            BOOK_AUTHOR_EDITOR_PHD_DSC_DISSERTATION:{
                name: 'Book author/Editor / PhD-DSc Dissertation',
                scores: [
                    3.0,
                    [],
                    null
                ]
            },
            INTERNAL_TECH_REPORT_INTERNAL_PROJECT_REPORT_BS_BA_TEAM_CAPSTONE_PROJECT:{
                name: 'Internal Tech report / Internal project report / BS-BA team capstone project',
                scores: [
                    2.0,
                    null,
                    Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS
                ]
            }
        },
    },
    recognizedExpertiese:{
        value: apiString.RECOGNIZED_EXPERTIESE,
        contents: {
            TEAM_MEMBER: {
                name:'Team member',
                scores: [

                ]
            },
            POSITION_CONSULTANCY: {
                name:'Position/Consultancy',
                scores:[
                    
                ]
            },
            EXPERT_TESTIMONY: {
                name: 'Expert testimony',
                scores: [

                ]
            },
        }
    },
    patents:{
        value: apiString.PATENTS,
        contents: {
        
        }
    },
    languages:{
        value: apiString.LANGUAGES,
        contents: {
        
        }
    },
    leisureTravel:{
        value: apiString.LEISURE_TRAVEL,
        contents: {
        
        }
    }
}


