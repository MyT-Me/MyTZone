var apiParameters = require('../strings')('api');
module.exports = function(app){
    
    app.get('/',function (req,res) {
    console.log("Request");
    res.render('index');
    })

    app.get('/:id',function(req,res){
        if(req.params == 0){
            res.render('index');
        } else {
            var id = req.params.id;
            switch (id) {
                case apiParameters.BASE:
                    res.render('base');
                    break;
                case apiParameters.LOGIN:
                    res.render('login');
                    break;
                case apiParameters.EDUCATION:
                    res.render('educate');
                    break;
                case apiParameters.WORK_EXPERIENCE:
                    res.render('work');
                    break;
                case apiParameters.DEEDS:
                    res.render('deeds');
                    break;
                case apiParameters.SKILLS:
                    res.render('skills');
                    break;
                case apiParameters.TOOLS:
                    res.render('tools');
                    break;
                default:
                    break;
            }
        }   
    })
}