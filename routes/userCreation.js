var userModel = require('../models/addMethods');

module.exports = function (app,passport) {
    app.post('/signUp',passport.authenticate('local-signup', {
            successRedirect : '/education', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
}
