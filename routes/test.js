module.exports = function (app) {
    app.post('/test/:id',function (req,res) {
        console.log(req.params);
        console.log(req.body);
        res.setHeader('Content-Type','application/json');
        res.send(JSON.stringify({"request":"received"}));
    })

    app.get('/test',function(req,res){
        res.send(JSON.stringify({"status":"I am working"}));
    })

}