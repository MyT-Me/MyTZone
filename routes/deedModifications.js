'use strict';

var parameters = require('../strings/apiStrings');
module.exports = function (app) {
    app.put('/api/deeds/:id', function (req, res) {
        if(!req.params === 0){
            console.log("Inside the Edit API (PUT)");
            switch (req.params.id) {
                case parameters.EDUCATION:
                    console.log("Inside Edit Education");
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
                    console.log("Inside Default");
                    break;
                console.log("This is in Edit section");
                res.status(204);
                res.send(JSON.stringify({"edit request":"received"}));
            }
        } else {
            res.status(404)
            res.send(JSON.stringify({"error":"Missing the Parameter"}));
        }
    })
}
