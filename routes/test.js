module.exports = function (app) {
    app.post('/test',function (req,res) {
        console.log(req.body);
        res.setHeader('Content-Type','application/json');
        res.send(JSON.stringify({"request":"received"}));
    })
}