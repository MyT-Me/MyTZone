var parameters = require('../strings/apiParameters');

module.exports = function (app) {
    app.post('/api/deeds/:id',function (req,res) {
        if(!(req.params==0)){
            switch (req.params.id){
                case parameters.EDUCATION:
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
            }
            console.log(req.params.id);
            res.status(204).send();
        } else {
            console.log("Inside the Error");
            res.status(404).json({"error":"Please Enter a Parameter"});
        }
    })
}

