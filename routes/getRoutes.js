var getters = require('../models/getMethods')

module.exports = function(app){
    console.log("I ran")
    app.get('/api/education',function(req,res){
        getters.getEducation(req,function(err,educationData){
            console.log("CalledBack")
            if(err===null)
            {
                console.log("Here");
                res.send(educationData);    
            } else {
                res.send(err.toString());
            }
        })
    })
}