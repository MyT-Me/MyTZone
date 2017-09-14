
var models = require('./schema');
var common = require('./common');
var User = models.User;

exports.removeDeed = function (req, deedName, ids, callabck) {
    //Checking if ids is Empty. If it is we have to delete whole Deed Sectios - All Education Section, all Tools Section etc
    try {
        if(!req.user){
            callback(new Error("Internal error"),null);
            return;
        }
        var userEmail = req.user.email;
        User.findOne({"email": userEmail}, function (err, profile) {
            var deletedIds = [];
            if(err){
                callabck(err);
            } else if(profile === undefined || profile === null){
                callabck(new Error("Empty Profile"), null);
            } else {
                if(Object.keys(ids).length === 0){
                    // Singlifies Empty ids hence need to delete Whole Array section
                    callabck(new Error("Empty IDS"), null);
                } else {
                    //This Section says there is at least one Object Key hence only will delete that particular deed
                    for (var DeedNames in ids){
                        if(ids.hasOwnProperty(DeedNames)){
                            // For Each Deed Section in the Id's Part
                            var idsToRemove = ids[DeedNames];
                            idsToRemove.forEach(function (eachId) {
                                //Finding Index for Each Id
                                var currentDeedIndex = common.searchFunction(profile[DeedNames].deedData, eachId);
                                if(currentDeedIndex > -1) {
                                    profile[DeedNames].deedData.splice(currentDeedIndex,1);
                                }
                            });
                        };
                    }
                    profile.save(function (err) {
                        callabck(err);
                    })
                }
            }
        });
    } catch (err) {
        callabck(err, null);
    }
}