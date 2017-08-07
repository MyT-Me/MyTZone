'use strict';
var strings = require('../strings')('api');
var getSchemas = {
    education: {
        school: "schoolUniversityName",
        field: "majorFiedOfStudy",
        degree: "typeOfDegree",
        start: "startYear",
        end: "endYear",
        status: "degreeProgramStatus",
        honor: "honors",
        timestamp: "timeStamp",
        id: "customId" 
    },
    workExperience: {
    },
    deeds: {
        'id': "",
        'smonth': "",
        'syear': "",
        'category': "",
        'activity': "",
        'deeddes': "",
        'pub': "",
        'art': ""
    },
    skills: {
    },
    tools: {
        }
    }

module.exports = function (value) {
    
    
    switch (value) {
    case strings.EDUCATION:
        console.log(getSchemas.EDUCATION);
        return getSchemas.education;
    case strings.DEEDS:
        return getSchemas.deeds;
    default:
        return null;
    }
};