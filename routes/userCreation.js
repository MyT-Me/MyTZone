var models = require('../models/schema');
var userMethods = require('../models/userMethods');


module.exports = function(app){
    app.post('/signUp',function(req,res){
        userMethods.createUser(req,function(err){
            if(err) {
                res.status(500).send(JSON.stringify({"status": err.toString()}));
            } else {
                res.status(201).send(JSON.stringify({"status": "user Created"}));

            }
        });
    });
}