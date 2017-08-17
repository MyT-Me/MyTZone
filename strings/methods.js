
var apiStrings = require('./apiStrings');

var addParameterChecker = new Set([apiStrings.EDUCATION, apiStrings.WORK_EXPERIENCE, apiStrings.CERTIFICATES, apiStrings.CONDUCTING_CLASSES, apiStrings.MENTORING, apiStrings.WRITINGS,
        apiStrings.CONFERENCES, apiStrings.AWARDS, apiStrings.RECOGNIZED_EXPERTISE, apiStrings.PATENTS, apiStrings.LANGUAGES, apiStrings.LEISURE_TRAVEL, apiStrings.TOOLS,
        apiStrings.SKILLS, apiStrings.POINTS]);

module.exports = {
    verifier: addParameterChecker,
    edit: {
    },
    remove: {
    },
    getMethods: {
    }   
}