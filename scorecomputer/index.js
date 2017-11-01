var apiStrings = require('../strings')('api');
var scoreValues = require('../scoreWeights/values');
var deeds = [
    apiStrings.EDUCATION,
    apiStrings.CONFERENCES,
    apiStrings.CERTIFICATES,
    apiStrings.TAKING_CLASSES,
    apiStrings.CONDUCTING_CLASSES,
    apiStrings.MENTORING,
    apiStrings.WRITINGS,
    apiStrings.CONFERENCES,
    apiStrings.
    apiStrings.LEISURE_TRAVEL,


];

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

var scorer = function(userProfile) {
    this.My_T_Top_Score = 0;
    this.My_T_Stem_Score = 0;
    this.My_T_Score = 0;
    this.My_T_Top = {}
    this.My_T_Stem = {}
    for(var eachTop in top ){
        this.My_T_Top[top[eachTop]] = 0
    } 
    for(var eachStem in Stem) {
        this.My_T_Stem[Stem[eachStem]] = 0
    }
    //Education Scoring
    var eduData = userProfile[apiStrings.EDUCATION].deedData;
    for(var index= 0;index<eduData.length;index++) {
        scoreHelper(apiStrings.EDUCATION,eduData[index],index++);
    }
    //Deed Scoring
    for(var index=0;index <deeds.length;index++){
        var currentDeed = userProfile[deeds[index]];
        
    }


    //Work Experience Scoring
    //Tools Skills Scoring
    //Skills Scoring

    function scoreHelper(deedCategory, deed, identifier) {
        if(scoreValues[deedCategory].contents.has(deed[identifier])){
            var scoreValues =  scoreValues[deedCategory].contents.scores;
            var currentScore = deed[score] * scoreValues.score[0]
            if(scores[2]!==null) {
                My_T_Stem[scores[2]] =  My_T_Stem[scores[2]] + currentScore;
            }
            if(scores[1]!==null){
                for(var i = 0 ;i<9;i++){
                    My_T_Top[i] = My_T_Top[i] + (currentScore*scores[1][i])
                }
            }
        }
    }
}

scorer.prototype.buildJSON = function(){
    
    return {
        My_T_Score: this.My_T_Score,
        My_T_Top: this.My_T_Top,
        My_T_Stem: this.My_T_Stem,

    }
}

module.exports = function( userProfile ) {
    var userScore = new scorer(userProfile);
    
    
    return userScore.buildJSON();

}