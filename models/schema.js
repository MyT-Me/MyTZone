/**
 * Created by Revanth Penugonda on 3/19/2017.
 */

/* Adding all the require files */
var strings = require('../strings')('models');
var mongoose = require('mongoose');
 require('mongoose-type-email');
var schema = mongoose.Schema();

var educationSchema = new mongoose.Schema({
   schoolName: {type:String, required:true},
   fieldOfStudy: {type:String,required:true},
   typeOfProgram:{type:String,required:true},
   startYear: {type: Date, required:true},
   yearAwarded:{type: Date, required:true},
   programStatus:{type: String, required:true},
   honors:{type: Boolean}
});

var certificateSchema = new mongoose.Schema({
    specificActivity:{type: Number, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var takingClassesSChema = new mongoose.Schema({
    specificActivity:{type: Number, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var conductingClassesSchema = new mongoose.Schema({
    specificActivity:{type: Number, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var mentoringSchema = new mongoose.Schema({
    specificActivity:{type: Number, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var writingSchema = new mongoose.Schema({
    publicationName:{type:String, required:true},
    specificActivity:{type:Number, required:true},
    articleTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var conferenceSchema = new mongoose.Schema({
    awardSponsor:{type: String, required:true},
    specificActivity:{type:Number, required:true},
    awardTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var awardSchema = new mongoose.Schema({
    confrenceSponsor:{type: String, required: true},
    specificActivity:{type:Number, required:true},
    presentationTitle:{type:String,required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var recognizedExpertiseSchema = new mongoose.Schema({
    specificActivity: {type: Number, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var patentsSchema = new mongoose.Schema({
    specificActivity: {type: Number, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var languagesSchema = new mongoose.Schema({
    specificActivity: {type: Number, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});


var leisureTravelSchema = new mongoose.Schema({
    specificActivity: {type: Number, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});


var employerSectionSchema = new mongoose.Schema({
    employerSectionOfFocus: {type:String, required:true},
    location:{type:String, required:true},
    position: {type:String,required:true},
    primaryFunction: {type:String,required:true},
    yourRole:{type:String, required:true},
    teamSize: {type:Number, required:true},
    teamMultiDisciplinaryMakeup : {type:String , required:true},
    teamMultiCulturalMakeup : {type:String , required:true},
    startMonth:{type:Date, required:true},
    startYear:{type:Date, required:true},
    endMonth:{type:Date, required:true},
    endYear : {type:Date,required:true},
    startMonth:{type:Date, required:true},
    paidUnPaid : {type:Boolean, required:true}
});

var workExperienceSchema = new mongoose.Schema({
    employerOrganizationName: {type: String, required:true},
    employerSection: [employerSectionSchema]
});


var toolSchema = new mongoose.Schema({

})

var skillsSchema = new mongoose.Schema({

})

var pointsSchema = new mongoose.Schema({

})  



//With Score for Each section
var educationScoreSchema = new mongoose.Schema({
    education: {type:mongoose.Schema.Types.ObjectId,ref:'education',required:true},
    educationScore :{type:Number,required:true}
})

var certificatesScoreSchema = new mongoose.model({
    certificates: {type: mongoose.Schema.Types.ObjectId,ref:'certificate'}
})


//User Profile
var UserProfileSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type:String, required:true},
    middleName: {type:String, },
    userName: {type:String, required: true},
    email: {type:mongoose.SchemaTypes.Email, requiredtrue:true },
    firstYear: {type:Date},
    education:{
        education: [educationSchema],
        eduTotalscore:{type:Number,required:true,default:0}
    },
    workExperience:[workExperienceSchema],
    certificates:[certificateSchema],
    takingClasses:[takingClassesSChema],
    conductingClasses:[conductingClassesSchema],
    mentoring:[mentoringSchema],
    writings:[writingSchema],
    conferences:[conferenceSchema],
    awards:[awardSchema],
    recognizedExpertise:[recognizedExpertiseSchema],
    patents:[patentsSchema],
    languages:[languagesSchema],
    leisureTravel:[leisureTravelSchema],
    tools:[],
    skills:[],
    points:[]
});



//Methods Will be Here till we find a better way to implement it



//Creating models for schemas
var User =  mongoose.model(strings.USER,UserProfileSchema);
var Education = mongoose.model(strings.EDUCATION,educationSchema);
var WorkExperience = mongoose.model(strings.WORK_EXPERIENCE,workExperienceSchema);
var Certificates = mongoose.model(strings.CERTIFICATES,certificateSchema);
var TakingClasses = mongoose.model(strings.TAKING_CLASSES,takingClassesSChema);
var ConductingClasses = mongoose.model(strings.CONDUCTING_CLASSES,conductingClassesSchema);
var Mentoring = mongoose.model(strings.MENTORING,mentoringSchema);
var Writings = mongoose.model(strings.WRITINGS,writingSchema);
var Conferences = mongoose.model(strings.CONFRENCES,conferenceSchema);
var Awards = mongoose.model(strings.AWARDS,awardSchema);
var RecognizedExpertise = mongoose.model(strings.RECOGNIZED_EXPERTIESE,recognizedExpertiseSchema);
var Patents = mongoose.model(strings.PATENTS,patentsSchema);
var Languages = mongoose.model(strings.LANGUAGES,languagesSchema);
var LeisureTravel = mongoose.model(strings.LEISURE_TRAVEL,leisureTravelSchema);
var Tools = mongoose.model(strings.TOOLS,toolSchema);
var Skills = mongoose.model(strings.SKILLS,skillsSchema);
var Points = mongoose.model(strings.POINTS,pointsSchema);

//Exporting users
exports.User = User;
exports.Education = Education;
exports.WorkExperience = WorkExperience;
exports.Certificates = Certificates;
exports.TakingClasses = TakingClasses;
exports.ConductingClasses = ConductingClasses;
exports.Mentoring = Mentoring;
exports.Writings = Writings;
exports.Conferences = Conferences;
exports.Awards = Awards;
exports.RecognizedExpertise = RecognizedExpertise;
exports.Patents = Patents;
exports.Languages = Languages;
exports.LeisureTravel = LeisureTravel;
exports.Tools = Tools;
exports.Skills = Skills;
exports.Points = Points;

exports.Models = {
    User:User,
    Education:Education,
    WorkExperience:WorkExperience,
    Certificates:Certificates,
    TakingClasses:TakingClasses,
    ConductingClasses:ConductingClasses,
    Mentoring:Mentoring,
    Writings:Writings,
    Conferences:Conferences,
    Awards:Awards,
    RecognizedExpertise:RecognizedExpertise,
    Patents:Patents,
    Languages:Languages,
    LeisureTravel:LeisureTravel,
    Tools:Tools,
    Skills:Skills,
    Points:Points
}


