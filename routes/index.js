var addDeeds = require('./deedAdditions');
var deleteDeeds = require('./deedDeletions');
var modifyDeeds = require('./deedModifications');
var createUser = require('./userCreation');
var testing = require('./test');

module.exports = function (app){
    addDeeds(app);
    testing(app);
    createUser(app);
    modifyDeeds(app);
    deleteDeeds(app);

}