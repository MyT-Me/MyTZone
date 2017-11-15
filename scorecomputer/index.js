var apiStrings = require('../strings')('api');
var scoreValues = require('./values');
var scorerValuesHelper = require('../scoreWeights/values')
// var deeds = [
//     apiStrings.EDUCATION,
//     apiStrings.CONFERENCES,
//     apiStrings.CERTIFICATES,
//     apiStrings.TAKING_CLASSES,
//     apiStrings.CONDUCTING_CLASSES,
//     apiStrings.MENTORING,
//     apiStrings.WRITINGS,
//     apiStrings.CONFERENCES,
//     apiStrings.
//     apiStrings.LEISURE_TRAVEL,


// ];

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
    var parent = this;
    //Education Scoring
    var eduData = userProfile[apiStrings.EDUCATION].deedData;
    for(var index= 0;index<eduData.length;index++) {
        scoreHelper(scorerValuesHelper,apiStrings.EDUCATION,eduData[index],"degreeProgramStatus");
    }
    //Deed Scoring
    /*
    for(var index=0;index <deeds.length;index++){
        var currentDeed = userProfile[deeds[index]];
        
    }*/


    //Work Experience Scoring
    //Tools Skills Scoring
    //Skills Scoring
    console.log("First");

    function scoreHelper(scoreValues,deedCategory, deed, identifier) {
        var currentContents = scoreValues[deedCategory].contents;
        console.log(currentContents)
        console.log(deed[identifier])
        console.log(currentContents.hasOwnProperty(deed[identifier]))
        if(currentContents.hasOwnProperty(deed[identifier])){
            console.log("Second")
            var scoreArray =  currentContents[deed[identifier]].scores;
            console.log(deed)
            var currentScore = deed['score'] * scoreArray[0]
            if(scoreArray[2]!==null) {
                console.log(parent);
                console.log(parent['My_T_Stem']);
                parent['My_T_Stem'][scoreArray[2]] =  parent['My_T_Stem'][scoreArray[2]] + currentScore;
            }
            if(scoreArray[1]!==null){
                for(var i = 0 ;i<9;i++){
                    parent['My_T_Top'][i] = parent['My_T_Top'][i] + (currentScore*scoreArray[1][i])
                }
            }
        }
    }
}

scorer.prototype.buildJSON = function(){
    console.log("Three");
    returnJSON = {
        My_T_Score: this.My_T_Score,
        My_T_Top: this.My_T_Top,
        My_T_Stem: this.My_T_Stem,

    }
    return returnJSON; 
}

module.exports = function( userProfile, callback ) {
    var userScore = new scorer(userProfile);
    var returnJSON = userScore.buildJSON()
    console.log(callback)
    callback(null,returnJSON)
}