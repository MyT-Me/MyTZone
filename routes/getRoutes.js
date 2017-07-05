var getters = require('../models/getMethods')

module.exports = function(app){
    console.log("Education Test")
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


module.exports = function(app){
    app.get('/api/deeds',function(req,res){
        getters.getDeeds(req,function(err,deedsData){
            if(err===null){
                res.send(deedsData);
            } else {
                res.send(err.toString);
            }
        })
    })
}