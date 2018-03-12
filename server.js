/**
 * Created by revanth penugonda on 3/19/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
var dbconfig = require('./strings')('db');
var app = express();



/*Setting UP for Session and Authentication*/

var passport = require('passport');
var flash = require('flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

mongoose.Promise = require('bluebird');

/*Setting Parameters */
app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'ejs');

/*Setting Usage*/
app.use(express.static(__dirname +'/views'));
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json({extend:true}));

/*Setting Up Database*/
mongoose.connect(dbconfig.getMongoUrl()).then(
    () => {console.log("Connected To Database")},
    err => {
    console.log("Error in Connection -> " + err);
});


//Enabling CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Loading Schemas before Passport loading
require('./models/schema');
require('./authentication/passport');
//Passport Settings 
app.use(passport.initialize());

//Additional Usage Settings

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret:'myTzone'}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/scripts', express.static(__dirname + '/node_modules/'));


/*Adding Routes*/
//require('./authentication/passport')(passport);
require('./routes')(app);




//Handling UnAuthorized Entries with the Custom Error Handler
app.use(function(err, req, res, next){
    if(err) {
        console.log(err);
    }
    console.log(req.url);
    var url = req.url
    if (err.name === 'UnauthorizedError') {
        if (url.startsWith('/sub')) {
            res.redirect('../pages/login');
        } else {
            res.status(401);
            res.json({"message" : err.name + ": " + err.message});
        }
    }
});


app.listen(app.get('port'),function () {
    console.log("Started Listening @", app.get('port'));
})


