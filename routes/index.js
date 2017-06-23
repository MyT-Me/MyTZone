var addDeeds = require('./deedAdditions');
var deleteDeeds = require('./deedDeletions');
var modifyDeeds = require('./deedModifications');
var createUser = require('./userCreation');
var testing = require('./test');
var getRoutes = require('./getRoutes');
var viewHandlers = require('./viewHandlers');

module.exports = function (app){
    viewHandlers(app);
    addDeeds(app);
    testing(app);
    createUser(app);
    modifyDeeds(app);
    deleteDeeds(app);
    getRoutes(app);
}