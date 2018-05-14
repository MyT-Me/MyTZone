/*var validatorClass = require('jsonschema').Validator;
var validator = new validatorClass();
*/

var validatorClass = require('jsonschema').Validator;
var validator = new validatorClass;

var JSONValidator = function (validationSchema, body) {
    var result = validator.validate(body, validationSchema);
    var validatorResult = result.valid;
    if(!validatorResult){
        // console.log("Validation Schema");
        // console.log(validationSchema);
        // console.log("Body");
        // console.log(body);
        // console.log(result);
    } else {
        //console.log("Vaidation Successful");
    }
    return validatorResult;
};

module.exports = {
    JSONValidator: JSONValidator
};