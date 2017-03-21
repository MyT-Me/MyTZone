var addDeeds = require('./deedAdditions');
var deleteDeeds = require('./deedDeletions');
var modifyDeeds = require('./deedModifications');
var createUser = require('./userCreation');
var myTest = require('./test');

module.exports = function (app){
    myTest(app);
    createUser(app);
    addDeeds(app);
    modifyDeeds(app);
    deleteDeeds(app);

}