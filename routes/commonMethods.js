/*var validatorClass = require('jsonschema').Validator;
var validator = new validatorClass();
*/

var validatorClass = require('jsonschema').Validator;
var validator = new validatorClass;

var JSONValidator = function (validationSchema, body) {
    var result = validator.validate(body, validationSchema);
    var validatorResult = result.valid;
    if(!validatorResult){
        console.log(result);
    }
    return validatorResult;
};

module.exports = {
    JSONValidator: JSONValidator
};