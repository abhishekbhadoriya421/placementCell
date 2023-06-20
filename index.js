require('dotenv').config()
const express = require('express');
const app = express();
const port = 8000;
const session = require('express-session');
const passport = require('passport');
require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');

require('./config/mongoose');
app.use(express.urlencoded());
app.use(express.json());
// using Cookies middleware
app.use(cookieParser());
// set view Engin
app.set('view engine', 'ejs');
app.set('views','./views');

// view the static file
app.use(express.static('assets'));

// Create Session
app.use(session({
    name: 'PlacementCell',
    secret: process.env.secretKey,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl:process.env.mongoURL,
        autoRemove: 'disabled'
    },
        function(err){
           console.log(err || 'connected mongo-connect')
        }
    )
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Main Route 
app.use('/', require('./route/index'));
app.listen(port,(err)=>{
    if(err){
        console.log('There is an Error',err);
        return;
    }
    console.log('Running at Port: ',port);
});