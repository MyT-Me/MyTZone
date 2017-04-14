var userModel = require('../models/userMethods');

module.exports = function (app) {
    app.post('/api/creteuser',function(req,res){
        console.log("I am create User ");

        userModel.createUser(req,function(err){
            if(err){
                res.status(500).send(err.message);
            } else {
                res.status(201).json({'message':'user Created'});
            }
        })
    })    
}
