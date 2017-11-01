var deedStrings = require('../strings')('api');
var scoreStrings = require('../strings')('scores');
var MyTopIndexing = [
    scoreStrings.Top.PROJECT_MANAGEMENT,
    scoreStrings.Top.ORGANIZATIONAL_DESIGN,
    scoreStrings.Top.COMMUNICATIONS,
    scoreStrings.Top.CRITICAL_THINKING,
    scoreStrings.Top.TEAMWORK,
    scoreStrings.Top.NETWORKING,
    scoreStrings.Top.EMPATHY,
    scoreStrings.Top.PERSPECTIVE,
    scoreStrings.Top.GLOBAL_UNDERSTANDING
];

var MyTStem = new Set([
    scoreStrings.Stem.MEMBERSHIPS_AUTHORSHIPS_RECOGNITIONS,
    scoreStrings.Stem.EDUCATION_BRIEFINGS_TEACHING,
    scoreStrings.Stem.OPERATION_RESPONSIBILITIES_EXPERTISE,
    scoreStrings.stem.SOFTWARE_DEVICE_PROFICIENCY,
    scoreStrings.Stem.METHODS_SKILLS_PROFIECIENCY
]);

var ScoreWeights = {

}

//Score JSON Generator
var scoreWeightGenerator = function(weight,top,stemSection){
    returnJSON = {}
    if(top!==null){
        returnJSON['My-T-Top'] = {}
        if(top.length === MyTopIndexing.length) {
            for (var i = 0; i<top.length; i++){
                if(top[i]>0){
                    returnJSON['My-T-Top'][MyTopIndexing[i]] = top[i];
                }
            }
        }
    }
    if(stem!==null && MyTStem.has(stem)) {
        returnJSON['My-T-Stem'] = stem;
    }
    returnJSON['Weight'] = weight;
    return returnJSON
}


//Adding Scores Manually

//Education
var educationScorer = {}  
educationScorer[scoreStrings.education.EARNED_DEGREE_AWARDED]  = scoreWeightGenerator(
    10.0,
    null,
    scoreStrings.Stem.EDUCATION_BRIEFINGS_TEACHING
);

educationScorer[scoreStrings.education.EARNED_DEGREE_ADDITIONAL_FIELD_OF_STUDY] = scoreWeightGenerator(
    12.0,
    [0,0,0,5,0,3,2,10,0],
    scoreStrings.Stem.EDUCATION_BRIEFINGS_TEACHING
);

//Work Experience
var workExperienceScorer = {}

//Certificates
var certificatesScorer = {}

//Taking Classes
var takingClassesScorer = {}
takingClassesScorer[scoreStrings.takingClasses._1_2_DAY] = scoreWeightGenerator(
    0.5,
    null,
    scoreStrings.Stem.EDUCATION_BRIEFINGS_TEACHING
);
takingClassesScorer[scoreStrings.takingClasses._1_2_DAY] = scoreWeightGenerator(
    2.0,
    null,
    scoreStrings.Stem.EDUCATION_BRIEFINGS_TEACHING
);
takingClassesScorer[scoreWeightGenerator.takingClasses._3_5_DAY] = scoreWeightGenerator(
    2.0,
    null,
    scoreStrings.Stem.EDUCATION_BRIEFINGS_TEACHING
);
takingClassesScorer[scoreWeightGenerator.takingClasses._1_4_WEEK] = scoreWeightGenerator(
    3.0,
    null,
    scoreStrings.Stem.EDUCATION_BRIEFINGS_TEACHING
);
takingClassesScorer[scoreWeightGenerator.takingClasses.GT_4_WEEK] = scoreWeightGenerator(
    4.0,
    null,
    scoreStrings.Stem.EDUCATION_BRIEFINGS_TEACHING
);

//Conducting Classes 
var conductingClassesScorer = {}
conductingClassesScorer[CONDUCT_1_HOUR_OR_LONGER_BRIEFING_INVITED_LECTURE] = scoreWeightGenerator();
conductingClassesScorer[CONDUCT_1_2_DAY_BRIEFING_WORKSHOP] = scoreWeightGenerator();
conductingClassesScorer[CONDUCT_1_2_DAY_BRIEFING_WORKSHOP] = scoreWeightGenerator();
conductingClassesScorer[CONDUCT_1_2_DAY_BRIEFING_WORKSHOP] = scoreWeightGenerator();
conductingClassesScorer[CONDUCT_1_2_DAY_BRIEFING_WORKSHOP] = scoreWeightGenerator();
//Mentoring
var mentoringScorer = {}

//Writing 
var writingScorer = {}

//Awards
var awardsScorer = {}

//Confrences 
var confrenceScorer = {}

//recogniziedExpertiese 
var recogniziedExpertieseScorer = {}

//Patents
var patentsScorer = {}

//Leisure
var leisureScorer = {}

//Languages
var languageScorer = {}


module.exports = function(){

}