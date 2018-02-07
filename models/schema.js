/**
 * Created by Revanth Penugonda on 3/19/2017.
 */

/* Adding all the require files */
var strings = require('../strings')('models');
var mongoose = require('mongoose');
require('mongoose-type-email');
var momemt = require('moment');
var momemtTime = require('moment-timezone-all');
var schema = mongoose.Schema();
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var uniquePlugin = require('mongoose-unique-validator');
var authStrings = require('../strings')('auth');
var findOrCreatePlugin = require('mongoose-findorcreate');

//With Score for Each section
var educationScoreSchema = new mongoose.Schema({
   customId:{type:String, required: true},
   schoolUniversityName: {type:String, required:true},
   majorFiedOfStudy: {type:String,required:true},
   typeOfDegree:{type:String,required:true},
   startYear: {type: String, required:true},
   endYear:{type: String, required:true},
   degreeProgramStatus:{type: String, required:true},
   honors:{type: String},
   timeStamp:{type:String, required: true},
   score :{type:Number,required:true,default:0}
});

var workExperienceScoreSchema = new mongoose.Schema({
    customId: { type: String },
    employerSectionOfFocus: {type: String, required: true},
    employerOrganizationName: {type: String, required: true},
    locationRegion: {type: String, required: true},
    startYear: {type: String, required: true},
    endYear: {type: String, required: true},
    startMonth: {type: String, required: true},
    endMonth : {type: String,required: true},
    positionDescription: {type: String, required: true},
    primaryFunction: {type: String, required: true},
    teamSize: {type: String, required: true},
    multiDisciplinaryMakeup: {type: String, required: true},
    multiCulturalMakeup: {type: String, required: true},
    paidUnpaid: {type:String, required: true},
    operationsResponsibilities:{
        OR_selectLocations: {type: String, required: true, possibleValues: ['yes','some','no']},
        OR_selectEquipment: {type: String, required: true, possibleValues: ['yes','some','no']},
        OR_selectManagingLabor: {type: String, required: true, possibleValues: ['yes','some','no']},
        OR_determineProcessing: {type: String, required: true, possibleValues: ['yes','some','no']}
    },
    criticalThinking: {
        CT_requiredMetoFormGoals: {type: String, required: true, possibleValues: ['Yes','Some','No']},
        CT_requiredSystematicApproach: {type: String, required: true, possibleValues: ['Yes','Some','No']},
        CT_requiredInquisitive: {type: String, required: true, possibleValues: ['Yes','Some','No']},
        CT_requiredPrioritize: {type: String, required: true, possibleValues: ['Yes','Some','No']},
        CT_requiredConfidence: {type: String, required: true, possibleValues: ['Yes','Some','No']}
    },
    systemAndOperationInnovation:{
        SOI_evaluateApplications: {type: String, required: true ,possibleValues: ['Yes','Some','No']},
        SOI_selectApplicationsAndSolutions: {type: String, required: true, possibleValues: ['Yes','Some','No']},
        SOI_specificApplicationsAndSolutions: {type: String, required: true, possibleValues: ['Yes','Some','No']},
        SOI_buildApplicationsAndSolutions: {type: String, required: true, possibleValues: ['Yes','Some','No']},
        SOI_accessBenifitCostValueSolutions: {type: String, required: true, possibleValues: ['Yes','Some','No']}
    },
    score :{type:Number,required:true,default:0}
});

var certificatesScoreSchema = new mongoose.Schema({
    customId:{type:String, required: true},
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var takingClassesScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var conductingClassesScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var mentoringScoreSchema= new mongoose.Schema({
    customId:{type:String},
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}    
});

var writingsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    PublicationName:{type:String, required:true},
    specificActivity:{type:String, required:true},
    ArticleTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var conferenceScoreSchema = new mongoose.Schema({
    customId:{type:String},
    ConferenceSponsor:{type:String, required:true},
    specificActivity:{type:String, required:true},
    PresentationTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var awardsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    AwardSponsor:{type: String, required: true},
    specificActivity:{type:String, required:true},
    AwardTitle:{type:String,required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var recognizedExpertiseScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity: {type: String, required:true},
    description: {type:String, required:true},
    month:{type:Date},
    year:{type: Date, required: true},
    timeStamp: {type: Date},
    score: {type: Number, required: true, default: 0}
});

var patentsScoreSchema = new mongoose.Schema({
    customId: {type: String},
    specificActivity: {type: String, required:true},
    description: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var languagesScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity: {type: String, required:true},
    description: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var leisureTravelScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity: {type: String, required:true},
    description: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    score :{type:Number,required:true,default:0}
});

var skillsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    category:{type:String , required:true},
    softwareDeviceName: {type:String,required:true},
    vendorDistributor: {type:String, required:true},
    numberOfLinkedEndorsments: {type:Number, required: true},
    proficiencyType: {type: String, required: true},
    proficiencyYear: {type: Number, required: true},
    formalCertification: {type:Boolean, required:true},
    usagein3Years:{type:Boolean,required:true},
    score :{type:Number,required:true,default:0}     
});

var toolsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    category: {type:String, required:true},
    softwareDeviceName: {type:String, required:true},
    vendorDistributor: {type:String,required:true},
    numberOfLinkedEndorsments: {type:Number, required:true},
    proficiencyType: {type: String, required: true},
    proficiencyYear: {type: Number, required: true},
    formalCertification: {type:Boolean, required:true},
    usagein3Years:{type:Boolean,required:true},
    score :{type:Number,required:true,default:0}
});

var pointsScoreSchema = new mongoose.Schema({
    customId: {type:String},
    score :{type:Number,required:true,default:0}
});

//User Profile
var UserProfileSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type:String, required:true},
    middleName: {type:String},
    userName: {type:String, required: true, unique:true},
    email: {type:mongoose.SchemaTypes.Email, required:true, unique:true, index:true },
    password:{type:String,required:true},
    salt: {type:String},
    hash: {type: String},
    firstYear: {type:Date},
    education:{
        deedData: [educationScoreSchema],
        totalScore: {type:Number,required:true,default:0}
    },
    workExperience:{
        deedData: [workExperienceScoreSchema],
        totalScore: {type: Number, required: true, default:0}
    },
    certificates:{
        deedData: [certificatesScoreSchema],
        totalScore: {type:Number,required:true,default:0}
    },

    takingClasses:{
        deedData: [takingClassesScoreSchema],
        totalScore: {type: Number,required:true, default:0}
    },
    conductingClasses:{
        deedData: [conductingClassesScoreSchema],
        totalScore: {type:Number,required:true, default:0}
    },
    mentoring:{
        deedData: [mentoringScoreSchema],
        totalScore: {type:Number,required:true,default:0}
    },
    writings:{
        deedData: [writingsScoreSchema],
        totalScore: {type:Number,required:true,default:0}
    },
    conferences:{
        deedData: [conferenceScoreSchema],
        totalScore: {type:Number,required:true,default:0}
    },
    awards: {
        deedData: [awardsScoreSchema],
        totalScore :{type:Number,required:true,default:0}
    },
    recognizedExpertise:{
        deedData: [recognizedExpertiseScoreSchema],
        totalScore: {type:Number,required:true,default:0}
    },
    patents:{
        deedData: [patentsScoreSchema],
        totalScore :{type:Number,required:true,default:0}
    },
    languages:{
        deedData: [languagesScoreSchema],
        totalScore: {type:Number,required:true,default:0}
    },
    leisureTravel:{
        deedData: [leisureTravelScoreSchema],
        totalScore: {type:Number,required:true,default:0}
    },
    tools:{
        deedData: [toolsScoreSchema],
        totalScore: {type: Number, required:true, default: 0}
    },
    skills:{
        deedData: [skillsScoreSchema],
        totalScore: {type: Number, required:true, default: 0}
    },
    points:{
        deedData: [],
        totalScore: {type: Number, required:true, default: 0}
    }
});


//Applying Plugin Test to verify uniqueness and
UserProfileSchema.plugin(uniquePlugin);
//Applying Plugins For User Create Functionlaity
UserProfileSchema.plugin(findOrCreatePlugin);
//Methods that Set and Validate Password

UserProfileSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};


//Methods Will be Here till we find a better way to implement it


UserProfileSchema.methods.vaildPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

//Method to Create a JWT
UserProfileSchema.methods.generateJWT = function(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate()+7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        exp: parseInt(expiry.getTime()/1000)
    },authStrings.secret);
}


//Creating models for Score Schemas
var User =  mongoose.model(strings.USER,UserProfileSchema);
var EducationScore = mongoose.model(strings.EDUCATION_SCORE,educationScoreSchema);
var CertificateScore = mongoose.model(strings.CERTIFICATE_SCORE,certificatesScoreSchema);
var TakingClassesScore = mongoose.model(strings.TAKING_CLASSES_SCORE,takingClassesScoreSchema);
var ConductingClassesScore = mongoose.model(strings.CONDUCTING_CLASSES_SCORE,conductingClassesScoreSchema);
var MentoringScore = mongoose.model(strings.MENTORING_SCORE,mentoringScoreSchema);
var WritingsScore = mongoose.model(strings.WRITINGS_SCORE,writingsScoreSchema);
var ConfrenceScore = mongoose.model(strings.CONFERENCES_SCORE,conferenceScoreSchema);
var AwardsScore = mongoose.model(strings.AWARDS_SCORE,awardsScoreSchema);
var RecognizedExpertiseScore = mongoose.model(strings.RECOGNIZED_EXPERTIESE_SCORE,recognizedExpertiseScoreSchema);
var PatentsScore = mongoose.model(strings.PATENTS_SCORE,patentsScoreSchema);
var LanguagesScore = mongoose.model(strings.LANGUAGES_SCORE,languagesScoreSchema);
var LeisureTravelScore = mongoose.model(strings.LEISURE_TRAVEL_SCORE,leisureTravelScoreSchema);
var ToolsScore = mongoose.model(strings.TOOLS_SCORE, toolsScoreSchema);
var SkillsScore = mongoose.model(strings.SKILLS_SCORE, skillsScoreSchema);
var WorkExperienceScore = mongoose.model(strings.WORK_EXPERIENCE_SCORE, workExperienceScoreSchema);

//Exporting Schemas with Scores
module.exports = {
    User : User,
    EducationScore: EducationScore,
    CertificateScore: CertificateScore,
    TakingClassesScore: TakingClassesScore,
    ConductingClassesScore: ConductingClassesScore,
    MentoringScore: MentoringScore,
    WritingsScore: WritingsScore,
    ConfrenceScore: ConfrenceScore,
    AwardsScore: AwardsScore,
    RecognizedExpertiseScore : RecognizedExpertiseScore,
    PatentsScore : PatentsScore,
    LanguagesScore: LanguagesScore,
    LeisureTravelScore: LeisureTravelScore,
    ToolsScore: ToolsScore,
    SkillsScore: SkillsScore,
    WorkExperience:WorkExperienceScore
    
};

