var db = require('./db');
var api = require('./apiParameters');
var models = require('./modelStrings');
var scores = require('./scoreStrings');


module.exports = function(value){
    switch (value) {
    case 'db':
        return db;
    case 'api':
        return api;
    case 'models':
        return models;
    case 'scores':
        return scores;
    }
}