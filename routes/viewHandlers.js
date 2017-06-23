module.exports = function(app){
    
    app.get('/',function (req,res) {
    console.log("Request");
    res.render('index');
    })

}