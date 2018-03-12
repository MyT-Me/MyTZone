var jwt = require('express-jwt');
var authStrings = require('../strings')('auth');

var auth = jwt({
    secret: authStrings.secret
})

module.exports = auth;