var db = require('./db');
var api = require('./apiParameters');
var models = require('./modelStrings');

module.exports = function(value){
    switch(value) {
        case 'db':
            return db;
            break;
        case 'api':
            return api;
            break;
        case 'models':
            return models;
            break;
    }
}