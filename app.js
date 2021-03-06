var dotenv = require('dotenv').config();

var express         = require('express'),
    morgan          = require('morgan'),
    path            = require('path'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    app             = express(),
    indexRouter     = require('./server/routes/index.js'),
    entryRouter     = require('./server/routes/api/entries.js'),
    apiAuthRouter   = require('./server/routes/api/auth.js'),
    apiUsersRouter  = require('./server/routes/api/users.js'),
    ejs             = require("ejs"),
    compress        = require('compression');



// connect to db
// process.env.MONGOLAB_URI is needed for when we deploy to Heroku
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/adress_book" );


// log requests to STDOUT
app.use(compress());
app.use(morgan('dev'));
app.set('view engine', 'ejs')

// to get ejs to play nice with our rendering engine
app.set('views', path.join(__dirname, 'client/public/views'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// flash messages, NEEDS express-flash
// app.use(flash())

// This is how we read the cookies sent over from the browser
app.use(cookieParser());


// Set static file root folder
app.use(express.static('client/public'));

app.use('/', indexRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/entries', entryRouter);


//
// Listen on port for connections
// process.env.PORT is needed for when we deploy to Heroku
var port = process.env.PORT || 3000;
app.listen( port, function() {
  console.log("Go team go! 3000!");
});
