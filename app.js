/**
 * Created by revanth penugonda on 3/19/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/*Setting Parameters */
app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'ejs');

/*Setting Usage*/
app.use(express.static(__dirname +'/views'));
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());


app.get('/',function (req,res) {
    console.log("Request");
    res.render('welcome');
})


/*Adding Routes*/
require('./routes')(app);

app.listen(app.get('port'),function () {
    console.log("Started Listening @", app.get('port'));
})


