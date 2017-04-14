/**
 * Created by revan on 4/13/2017.
 */

var models = require('./schema');
var User = models.User;
exports.createUser = function(req,callback) {
    var user = new User(req.body);
    user.save(function(err){
        callback(err);
    })
}