
var apiStrings = require('./apiStrings');

var addParameterChecker = new Set([apiStrings.EDUCATION, apiStrings.WORK_EXPERIENCE, apiStrings.CERTIFICATES, apiStrings.CONDUCTING_CLASSES, apiStrings.MENTORING, apiStrings.WRITINGS,
        apiStrings.CONFERENCES, apiStrings.AWARDS, apiStrings.RECOGNIZED_EXPERTISE, apiStrings.PATENTS, apiStrings.LANGUAGES, apiStrings.LEISURE_TRAVEL, apiStrings.TOOLS,
        apiStrings.SKILLS, apiStrings.POINTS, apiStrings.TAKING_CLASSES]);

var removeParameterChecker = new Set([apiStrings.EDUCATION, apiStrings.WORK_EXPERIENCE, apiStrings.DEEDS, apiStrings.TOOLS, apiStrings.SKILLS]);



module.exports = {
    addVerifier: addParameterChecker,
    edit: {
    },
    removeVerifiers: removeParameterChecker,
    getVerifier: addParameterChecker,
    deleteIdsVerifier: addParameterChecker
}