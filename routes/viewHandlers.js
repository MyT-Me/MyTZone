"use strict";
var parameters = require('../strings')('api');
var auth = require('../authentication/authjwt');
module.exports = function (app) {
    app.get('/', function(req,res){
        res.render('index');
    });
    app.get('/pages/:id', function(req, res){
        if(req.params === 0)
        {
            res.render('index');
        }
        switch (req.params.id) {
            case parameters.BASE:
                res.render('base');
                break;
            case parameters.LOGIN:
                res.render('login');
                break;
            case parameters.REGISTRATION:
                res.render('registration');
                break;
        }
    });
    app.get('/sub/:id', auth , function(req, res){
        if(req.params === 0)
        {
            res.render('index');
        }
        console.log(req.user);
    
        switch (req.params.id) {
            case parameters.EDUCATION:
                res.render('educate');
                break;
            case parameters.WORK_EXPERIENCE:
                res.render('work');
                break;
            case parameters.DEEDS:
                res.render('deeds');
                break;
            case parameters.SKILLS:
                res.render('skills');
                break;
            case parameters.TOOLS:
                res.render('tools');
                break;
            case parameters.CHARTS:
                res.render('chart');
                break;
            default:
                res.render('index');
                break;
        }

    });

}