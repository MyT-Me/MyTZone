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
var crypt = require('bcrypt-nodejs');



var educationSchema = new mongoose.Schema({
   schoolName: {type:String, required:true},
   fieldOfStudy: {type:String,required:true},
   typeOfProgram:{type:String,required:true},
   startYear: {type: Date, required:true},
   yearAwarded:{type: Date, required:true},
   programStatus:{type: String, required:true},
   honors:{type: Boolean},
   timeStamp:{type:String}
});

var certificateSchema = new mongoose.Schema({
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var takingClassesSChema = new mongoose.Schema({
    specificActivity:{type: String, /*required:true*/},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var conductingClassesSchema = new mongoose.Schema({
    specificActivity:{type: String, /*required:true*/},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var mentoringSchema = new mongoose.Schema({
    specificActivity:{type: String, /*required:true*/},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date}
});

var writingSchema = new mongoose.Schema({
    publicationName:{type:String, /*required:true*/},
    specificActivity:{type:String, required:true},
    articleTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var conferenceSchema = new mongoose.Schema({
    awardSponsor:{type: String, /*required:true*/},
    specificActivity:{type:String, required:true},
    awardTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var awardSchema = new mongoose.Schema({
    confrenceSponsor:{type: String, /*required:true*/},
    specificActivity:{type:String, required:true},
    presentationTitle:{type:String,required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var recognizedExpertiseSchema = new mongoose.Schema({
    specificActivity: {type: String, /*required:true*/},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var patentsSchema = new mongoose.Schema({
    specificActivity: {type: String, /*required:true*/},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});

var languagesSchema = new mongoose.Schema({
    specificActivity: {type: String, /*required:true*/},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true}
});


var leisureTravelSchema = new mongoose.Schema({
    specificActivity: {type: String, required:true},
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
   customId:{type:String},
   schoolName: {type:String, required:true},
   fieldOfStudy: {type:String,required:true},
   typeOfProgram:{type:String,required:true},
   startYear: {type: Date, required:true},
   yearAwarded:{type: Date, required:true},
   programStatus:{type: String, required:true},
   honors:{type: Boolean},
   timeStamp:{type:String},
   educationScore :{type:Number,required:true,default:0}
})

var workExperienceScoreSchema = new mongoose.Schema({
    
})


var certificatesScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date},
    timeStamp:{type:Date},
    certificatesScore: {type:Number,default:0}
})

var takingClassesScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date},
    timeStamp:{type:Date},
    takingClassesScore:{type:Number,required:true,default:0}
})

var conductingClassesScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date},
    timeStamp:{type:Date},
    conductingClassesScore:{type:Number,required:true,default:0}
})

var mentoringScoreSchema= new mongoose.Schema({
    customId:{type:String},
    specificActivity:{type: String, required:true},
    description:{type:String, required:true},
    month:{type:Date},
    year:{type:Date},
    timeStamp:{type:Date},
    mentoringScore:{type:Number,required:true,default:0}    
})

var writingsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    publicationName:{type:String, required:true},
    specificActivity:{type:String, required:true},
    articleTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    writingScore: {type:Number,required:true,default:0}
})

var conferenceScoreSchema = new mongoose.Schema({
    customId:{type:String},
    publicationName:{type:String, required:true},
    specificActivity:{type:String, required:true},
    articleTitle:{type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    confrenceScore:{type:Number,default:0}
})

var awardsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    confrenceSponsor:{type: String, required: true},
    specificActivity:{type:String, required:true},
    presentationTitle:{type:String,required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    awardsScore: {type:Number,default:0}
})

var recognizedExpertiseScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity: {type: String, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    recognizedExpertiseScore:{type:Number,default:0}
})

var patentsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity: {type: String, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    patentsScore:{type:Number,default:0}
})

var languagesScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity: {type: String, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    languagesScore:{type:Number,default:0}
})

var leisureTravelScoreSchema = new mongoose.Schema({
    customId:{type:String},
    specificActivity: {type: String, required:true},
    deedDescription: {type:String, required:true},
    month:{type:Date},
    year:{type:Date, required:true},
    timeStamp:{type:Date},
    leisureTravelScore:{type:Number,default:0}
})

var skillsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    category:{type:String , required:true},
    softwareDeviceName: {type:String,required:true},
    vendorDistributor: {type:String, required:true},
    numberOfLinkedEndorsments: {type:Number},
    currentProficiency:{
        basic: {type:Date},
        intermediate: {type: Number},
        advanced: {type: Number},
        expert: {type: Number}    
    },
    formalCertification: {type:Number,required:true},
    usagein3Years:{type:Boolean,required:true},
    skillsScore:{type:Number}        
})

var toolsScoreSchema = new mongoose.Schema({
    customId:{type:String},
    category: {type:String, required:true},
    methodSkillName: {type:String, required:true},
    vendorDistributor: {type:String,required:true},
    numberOfLinkedEndorsments: {type:Number},
    currentProficiency:{
        basic: {type:Date},
        intermediate: {type: Number},
        advanced: {type: Number},
        expert: {type: Number}    
    },
    formalCertification: {type:Number,required:true},
    usagein3Years:{type:Boolean,required:true},
    toolsScore:{type:Number}
})


//User Profile
var UserProfileSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type:String, required:true},
    middleName: {type:String, },
    userName: {type:String, required: true, unique:true},
    email: {type:mongoose.SchemaTypes.Email, requiredtrue:true, unique:true},
    password:{type:String,required:true},
    firstYear: {type:Date},
    education:{
        educationData: [educationScoreSchema],
        eduTotalscore:{type:Number,required:true,default:0}
    },
    workExperience:{},
    certificates:{
        certificateData: [certificatesScoreSchema],
        certificateTotalScore: {type:Number,required:true,default:0}
    },

    takingClasses:{
        takingClassesData: [takingClassesScoreSchema],
        takingClassesTotalScore: {type: Number,required:true, default:0}
    },
    conductingClasses:{
        conductingClassesData: [conductingClassesScoreSchema],
        conductingClassesTotalScore: {type:Number,required:true, default:0}
    },
    mentoring:{
        mentoringData: [mentoringScoreSchema],
        mentoringTotalScore: {type:Number,required:true,default:0}
    },
    writings:{
        writingsData: [writingsScoreSchema],
        writingTotalScore: {type:Number,required:true,default:0}
    },
    conferences:{
        confrenceData: [conferenceScoreSchema],
        confrenceTotalScore: {type:Number,required:true,default:0}
    },
    awards: {
        awardsData: [awardsScoreSchema],
        awardsTotalScore :{type:Number,required:true,default:0}
    },
    recognizedExpertise:{
        recognizedExpertiseData: [recognizedExpertiseScoreSchema],
        recognizedExpertiseTotalScore: {type:Number,required:true,default:0}
    },
    patents:{
        patentsData: [patentsScoreSchema],
        patentsTotalScore :{type:Number,required:true,default:0}
    },
    languages:{
        languagesData: [languagesScoreSchema],
        languagesTotalScore: {type:Number,required:true,default:0}
    },
    leisureTravel:{
        leisureTravelData: [leisureTravelScoreSchema],
        leisureTravelTotalScore: {type:Number,required:true,default:0}
    },
    tools:[],
    skills:[],
    points:[]
});


//Methods Will be Here till we find a better way to implement it
UserProfileSchema.methods.generateHas = function(password){
    return crypt.hashSync(password,crypt.genSaltSync(), null);
};

UserProfileSchema.methods.vaildPassword = function(password){
    return crypt.compareSync(password, this.password);
};


//Creating models for schemas
var User =  mongoose.model(strings.USER,UserProfileSchema);
var Education = mongoose.model(strings.EDUCATION,educationSchema);
var WorkExperience = mongoose.model(strings.WORK_EXPERIENCE,workExperienceSchema);
var Certificates = mongoose.model(strings.CERTIFICATES,certificateSchema);
var TakingClasses = mongoose.model(strings.TAKING_CLASSES,takingClassesSChema);
var ConductingClasses = mongoose.model(strings.CONDUCTING_CLASSES,conductingClassesSchema);
var Mentoring = mongoose.model(strings.MENTORING,mentoringSchema);
var Writings = mongoose.model(strings.WRITINGS,writingSchema);
var Conferences = mongoose.model(strings.CONFERENCES,conferenceSchema);
var Awards = mongoose.model(strings.AWARDS,awardSchema);
var RecognizedExpertise = mongoose.model(strings.RECOGNIZED_EXPERTIESE,recognizedExpertiseSchema);
var Patents = mongoose.model(strings.PATENTS,patentsSchema);
var Languages = mongoose.model(strings.LANGUAGES,languagesSchema);
var LeisureTravel = mongoose.model(strings.LEISURE_TRAVEL,leisureTravelSchema);
var Tools = mongoose.model(strings.TOOLS,toolSchema);
var Skills = mongoose.model(strings.SKILLS,skillsSchema);
var Points = mongoose.model(strings.POINTS,pointsSchema);

//Creating models for Score Schemas
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
//Need to Add Tools, Skills and Points Score Schema. 

//Exporting users

/*
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
*/

//Exporting Schemas with Scores
exports.User = User;
exports.EducationScore = EducationScore;
exports.CertificateScore = CertificateScore;
exports.TakingClassesScore = TakingClassesScore;
exports.ConductingClassesScore = ConductingClassesScore;
exports.MentoringScore = MentoringScore;
exports.WritingsScore = WritingsScore;
exports.ConfrenceScore = ConfrenceScore;
exports.AwardsScore = AwardsScore;
exports.RecognizedExpertiseScore = RecognizedExpertiseScore;
exports.PatentsScore = PatentsScore;
exports.LanguagesScore = LanguagesScore;
exports.LeisureTravelScore = LeisureTravelScore;
//Add Tool,Skills and Points Score

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


