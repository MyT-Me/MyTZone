'use strict';
var addDeeds = require('./deedAdditions');
var deleteDeeds = require('./deedDeletions');
var createUser = require('./userCreation');
var testing = require('./test');
var getRoutes = require('./getRoutes');
var userAuthentication = require('./userAuthentication');
var viewHandlers = require('./viewHandlers');

module.exports = function (app){
    viewHandlers(app);
    userAuthentication(app);
    addDeeds(app);
    testing(app);
    createUser(app);
    deleteDeeds(app);
    getRoutes(app);
    testing(app);
}