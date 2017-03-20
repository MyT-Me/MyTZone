/**
 * Created by revanth penugonda on 3/19/2017.
 */

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'ejs');
app.use(express.static(__dirname +'/views'));

app.get('/',function (req,res) {
    console.log("Request");
    res.render('welcome');
})

app.listen(app.get('port'),function () {
    console.log("Started Listening @", app.get('port'));
})


