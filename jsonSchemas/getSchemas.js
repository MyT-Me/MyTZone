'use strict';
var strings = require('../strings')('api');

//Schema Design Principles


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
        category: "category",
        software: "softwareDeviceName",
        vendor: "vendorDistributor",
        linkedin: "numberOfLinkedEndorsments",
        formal: "formalCertification",
        usage: "usagein3Years",
        timestamp: "timeStamp",
        id: "customId",
        proficiencyType: "proficiencyType",
        proficiencyYear: "proficiencyYear"
    },
    tools: {
        category: "category",
        software: "softwareDeviceName",
        vendor: "vendorDistributor",
        linkedin: "numberOfLinkedEndorsments",
        formal: "formalCertification",
        usage: "usagein3Years",
        timestamp: "timeStamp",
        id: "customId",
        proficiencyType: "proficiencyType",
        proficiencyYear: "proficiencyYear"
    }
};

module.exports = function (value) {
    switch (value) {
    case strings.EDUCATION:
        console.log(getSchemas.EDUCATION);
        return getSchemas.education;
    case strings.DEEDS:
        return getSchemas.deeds;
    case strings.SKILLS:
        return getSchemas.skills;
    case strings.TOOLS:
        return getSchemas.tools;
    default:
        return null;
    }
};