var db = require('./db');
var api = require('./apiStrings');
var models = require('./modelStrings');
var scores = require('./scoreStrings');
var apiParamVerifier = require('./verifiers');

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
    case 'apiVerfier':
        return apiParamVerifier;
    }
}