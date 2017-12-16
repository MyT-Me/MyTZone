var validator = require('jsonschema').Validator;
var ourJsonSchema = require('../jsonSchemas');
var score = require('../scoreWeights/values')
module.exports = function (app) {
    var v = new validator();
    app.post('/test', function (req, res) {
        console.log(req.params);
        console.log(req.body);
        //console.log(v.validate(req.body, ourJsonSchema.login));
        //console.log(v.validate(req.body, ourJsonSchema.login).valid);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({"request": "received"}));
    });
    app.get('/test', function (req, res) {
        console.log(score)
        res.send(JSON.stringify({"status": "I am working"}));
    });
};