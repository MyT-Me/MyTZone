'use strict';
var addDeeds = require('./deedAdditions');
var deleteDeeds = require('./deedDeletions');
var modifyDeeds = require('./deedModifications');
var createUser = require('./userCreation');
var testing = require('./test');
var getRoutes = require('./getRoutes');
var userAuthentication = require('./userAuthentication');
var viewHandlers = require('./viewHandlers');
var scores = require('./scores');
var v2Get = require('./v2get');
var v2Post = require('./v2Post');

module.exports = function (app){
    viewHandlers(app);
    userAuthentication(app);
    addDeeds(app);
    testing(app);
    createUser(app);
    //modifyDeeds(app);
    deleteDeeds(app);
    getRoutes(app);
    scores(app);
    v2Get(app);
    v2Post(app);
    testing(app);
}