var educationWeight = require('./education');

module.exports = function(value){
    var education = educationWeight;


    switch(education){
        case "education":
            return education;
        default:
            return null;

    } 
}