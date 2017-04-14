/**
 * Created by Revanth Penugonda on 3/19/2017.
 */

/* Adding all the require files */
var mongoose = require('mongoose');
 require('mongoose-type-email');
var schema = mongoose.Schema();

var educationSchema = new mongoose.Schema({
   schoolName: {type:String, required:true},
   fieldOfStudy: {type:String,required:true},
   typeOfProgram:{type:String,required:true},
   startYear: {type: Date, required:true},
   yearAwarded:{type: Date, required:true},
   programStatus:{type: Date, required:true},
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


var UserProfileSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type:String, required:true},
    middleName: {type:String, },
    userName: {type:String, required: true},
    email: {type:mongoose.SchemaTypes.Email, requiredtrue:true },
    firstYear: {type:Date},
    education:[educationSchema],
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
var User =  mongoose.model('userProfile',UserProfileSchema);
var Education = mongoose.model('education',educationSchema);

//Exporting users
exports.User = User;
exports.Education = Education;



