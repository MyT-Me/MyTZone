/**
 * Created by Revanth Penugonda on 3/19/2017.
 */

/* Adding all the require files */
var mongoose = require('mongoose');
 require('mongoose-type-email');
var schema = new mongoose.Schema();

var UserProfileSchema = new schema({
    firstName: {type: String, required:true},
    lastName: {type:String, required:true},
    userName: {type:String, required: true},
    email: {type:mongoose.SchemaTypes.Email, requiredtrue:true },
});


var educationSchema = new schema({
   schoolName: {type:String, required:true},
   fieldOfStudy: {type:String,required:true},
   typeOfProgram:{type:Number,required:true},
   startYear: {type: Date, required:true},
   yearAwarded:{type: Date, required:true},
   programStatus:{type: Date, required:true},
   honors:{type: Boolean}
});

var certificateSchema = new schema({
    specificActivity:{type: Number, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var takingClassesSChema = new schema({
    specificActivity:{type: Number, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var conductingClassesSchema = new schema({
    specificActivity:{type: Number, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var mentoringSchema = new schema({
    specificActivity:{type: Number, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var writingSchema = new schema({
    publicationName:{type:String, required:true},
    specificActivity:{type:Number, required:true},
    articleTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var confrenceSchema = new schema({
    awardSponsor:{type: String, required:true},
    specificActivity:{type:Number, required:true},
    awardTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var awardSchema = new schema({
    confrenceSponsor:{type: String, required: true},
    specificActivity:{type:Number, required:true},
    presentationTitle:{type:String,required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var recognizedExpertise = new schema({
    specificActivity: {type: Number, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var patents = new schema({
    specificActivity: {type: Number, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var languages = new schema({
    specificActivity: {type: Number, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});


var leisureTravel = new schema({
    specificActivity: {type: Number, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

