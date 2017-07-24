'use strict';
var models = require('../models/schema');
var User = models.User;

module.exports = function (app){
    app.post('/login', function (req, res){
        console.log(req.body);
        res.status(201).send();
    });
}

