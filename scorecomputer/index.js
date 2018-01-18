var apiStrings = require('../strings')('api');
//var scoreValues = require('./values');
var scorerValuesHelper = require('./values')


var topIter = [
    'Project management',
    'Organizational design',
    'Communications',
    'Critical Thinking',
    'Teamwork',
    'Networking',
    'Empathy',
    'Perspective',
    'Global understandng'
]

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
        deedScoreHelper(scorerValuesHelper,apiStrings.EDUCATION,eduData[index],"degreeProgramStatus");
    }

    //Deed Scoring
    var allDeeds = [
        apiStrings.CERTIFICATES,
        apiStrings.TAKING_CLASSES,
        apiStrings.CONDUCTING_CLASSES,
        apiStrings.MENTORING,
        apiStrings.WRITINGS,
        apiStrings.RECOGNIZED_EXPERTISE,
        apiStrings.PATENTS,
        apiStrings.LEISURE_TRAVEL,
        apiStrings.LANGUAGES,
        apiStrings.AWARDS,
        apiStrings.CONFERENCES

    ];
    for( var deedIndex = 0; deedIndex < allDeeds.length ; deedIndex ++){
        //For each deed
        // try{
            var currentDeed = userProfile[allDeeds[deedIndex]].deedData;
            for(var index=0; index<currentDeed.length; index++) {
                console.log(allDeeds[deedIndex])
                deedScoreHelper(scorerValuesHelper,allDeeds[deedIndex],currentDeed[index], "specificActivity")

        }
    }


    //Work Experience Scoring
    //Tools Skills Scoring
    var toolsData = userProfile[apiStrings.TOOLS].deedData;
    var toolScoretillNow = userProfile[apiStrings.TOOLS]["totalScore"];
    for(var index = 0; index <toolsData.length; index++){
        toolScoretillNow = toolsSkillsScoreHelper(toolsData[index],apiStrings.TOOLS,toolScoretillNow);
    }
    parent.My_T_Stem[Stem.SOFTWARE_DEVICE_PROFICIENCY] += (40*toolScoretillNow);
    //Skills Scoring
    var skillsData = userProfile[apiStrings.SKILLS].deedData;
    var skillScoretillNow = userProfile[apiStrings.SKILLS]["totalScore"];
    for(var index = 0;index<skillsData.length; index++){
        skillScoretillNow = toolsSkillsScoreHelper(skillsData[index],apiStrings.SKILLS,skillScoretillNow);
    }
    parent.My_T_Stem[Stem.METHODS_SKILLS_PROFIECIENCY] += (40*skillScoretillNow)


    function deedScoreHelper(scoreValues,deedCategory, deed, identifier) {
        var currentContents = scoreValues[deedCategory].contents;
        console.log(currentContents)
        console.log(deed[identifier])
        if(currentContents.hasOwnProperty(deed[identifier])){
            console.log(deed[identifier])
            var scoreArray =  currentContents[deed[identifier]].scores;
            var currentScore = deed['score'] * scoreArray[0]

            if(scoreArray[2]!==null) {
                parent['My_T_Stem'][scoreArray[2]] =  parent['My_T_Stem'][scoreArray[2]] + currentScore;
            }
            if(scoreArray[1]!==null){
                var topScore = scoreArray[1];
                for(var i = 0; i<topIter.length ; i++){
                    parent['My_T_Top'][topIter[i]] = parent['My_T_Top'][topIter[i]] + (currentScore * topScore[i]);
                }

            }
        }
    }


    //Tools and SKills Score Helper
    function toolsSkillsScoreHelper(currentToolSkill,toolsOrSkills,scoreTillNow){
            //Gotto change with Moment Year
            var currentYear = 2018;
            var yearsGained = currentYear - currentToolSkill["proficiencyYear"];
            var localScores = { 
                                basic: 0.5,
                                inter: 1.75,
                                advanced: 3.25,
                                expert:4.75 };
            var proficiencyPoints = localScores[currentToolSkill["proficiencyType"]]
            var currentToolSkillScore = 0;
            var usedInLastThreeYears = currentToolSkill["usagein3Years"];
            var certiciation = currentToolSkill["formalCertification"];
            var endorsments = currentToolSkill["numberOfLinkedEndorsments"]
            var unweightedScore = 0
            //Implying the formula
            if(yearsGained>=12) {
                if(usedInLastThreeYears===true) {
                    unweightedScore = proficiencyPoints * ((yearsGained)/10);
                }
            } else if(yearsGained>7) {
                if(usedInLastThreeYears===true) {
                    unweightedScore = proficiencyPoints * ((yearsGained)/10);
                }
            } else if(yearsGained >3) {
                if(usedInLastThreeYears===true) {
                    unweightedScore = proficiencyPoints * ((12-yearsGained)/10);
                } else {
                    unweightedScore = proficiencyPoints * ((7-yearsGained)/4);
                }
            } else {
                unweightedScore = proficiencyPoints
            }
            console.log("unweighted score in console before multiplying");
            console.log(unweightedScore);
            //Adding Certification Weight
            if(certiciation===true) {
                unweightedScore * 1.5;
            }
            console.log("unweighted score in console");
            console.log(unweightedScore);
            //Adding LinkedIn
            if(endorsments>0) {
                unweightedScore = unweightedScore + (endorsments/20);
            }
            return scoreTillNow + unweightedScore;
    };
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