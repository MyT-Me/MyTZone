var verifier = require('../strings')('apiVerfier').removeVerifiers;
var idVerifier = require('../strings')('apiVerfier').deleteIdsVerifier;
var removers = require('../models/removeMethods');
var auth = require('../authentication/authjwt');

module.exports = function (app) {
    app.delete('/api/:removalDeed',auth,function (req,res) {

        //Checking if any Parameters are sent
        if(req.params === 0){
            res.status(422).send();
            return;
        }
        var requestId = req.params.removalDeed;
        // console.log(requestId);
        // console.log(req.query.ids);
        //Verifing if the id sent is correct
        if(!(verifier.has(requestId))) {
            //Inorrect Parameter Resource Tried to access
            res.status(422).send();
        } else {
            var queryParameters = req.query.ids;
            var deletionDataObject = {};
            if(queryParameters === undefined || queryParameters==="") {
                //Need To delete whole Section - Education/Deeds/Tools/SKills
            } else {
                var ids = {};
                if(!(Array.isArray(queryParameters))){
                    queryParameters = [queryParameters];
                }
                if(Array.isArray(queryParameters)){
                    // Query Parameters is form of array or list
                    queryParameters.forEach(function (eachQueryParameter) {
                        var stringSplit = eachQueryParameter.split(/\d/)[0];
                        //Checking If the Sent Verifier is the right one
                        if(idVerifier.has(stringSplit)){
                            //Checking if the Key is already added in the ids Object
                            if(!(ids.hasOwnProperty(stringSplit))){
                                //Simply Adding the Id to existing Array
                                ids[stringSplit] = new Set();
                            }
                            ids[stringSplit].add(eachQueryParameter);
                        }
                    });
                }
                //Converting Array to Set for new Logic

                removers.removeDeed(req,requestId, ids, function (err) {
                    if(err){
                        console.log(err);
                        res.status(500).send(JSON.stringify({error: err}));
                    } else {
                        res.status(200).send(JSON.stringify({status: 'okay'}));
                    }
                });
            }
        }

        //WIll only continue If above Conditions satisfy

    });
}