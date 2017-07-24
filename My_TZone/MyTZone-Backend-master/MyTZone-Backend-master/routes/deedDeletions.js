var parameters = require('../strings/apiParameters');
var removers = require('../models/removeMethods');
module.exports = function (app) {
    app.delete('/api/deeds/:id',function (req,res) {
        console.log("I am Inside the Delete API");
        if(!req.params==0){
            switch (req.params.id){
                case parameters.EDUCATION:
                    removers.removeEducation(req,function(err){
                        if(err){
                            console.log("Inside Remove Education")
                            res.status(500).send(err.message);
                        } else {
                            res.status(201).json({"operation":"education removed"})
                        }
                    })
                    break;
                case parameters.WORK_EXPERIENCE:
                    break;
                case parameters.CERTIFICATES:
                    break;
                case parameters.TAKING_CLASSES:
                    break;
                case parameters.CONDUCTING_CLASSES:
                    break;
                case parameters.MENTORING:
                    break;
                case parameters.WRITINGS:
                    break;
                case parameters.CONFERENCES:
                    break;
                case parameters.AWARDS:
                    break;
                case parameters.RECOGNIZED_EXPERTISE:
                    break;
                case parameters.PATENTS:
                    break;
                case parameters.LANGUAGES:
                    break;
                case parameters.LEISURE_TRAVEL:
                    break;
                case parameters.TOOLS:
                    break;
                case parameters.SKILLS:
                    break;
                case parameters.POINTS:
                    break;
                default:
                     console.log("Inside Default")
                    break;
                res.status(204).send();
            }
        } else {
            res.status(404).send(JSON.stringify({"error":"Missing the Parameter"}));
        }
    })
}
