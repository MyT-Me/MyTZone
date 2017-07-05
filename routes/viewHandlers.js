var apiParameters = require('../strings')('api');
module.exports = function(app,passport){
    
    app.get('/',function (req,res) {
    console.log(" Index Request");
    res.render('index');
    })

    app.get('/base',function(req,res){
        console.log('Base request');
        res.render('base');
    })

    app.get('/login',function(req,res){
        console.log("Login request");
        res.render('login',{ message: req.flash('loginMessage')});
    })

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/sub/'+apiParameters.EDUCATION, // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }))

    


    app.get('/sub/:id',isUserLoggedIn,function(req,res){
        console.log("Here In Index");
        if(req.params == 0){
            console.log("This");
            res.render('index');
        } else {
            console.log("I am Inside this Section");
            var id = req.params.id;
            switch (id) {
                case apiParameters.EDUCATION:
                    console.log("Came Education")
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

    function isUserLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    }    


}