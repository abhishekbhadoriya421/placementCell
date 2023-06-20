const express = require('express');
const homePage = require('../controller/homeController');
const User = require('./user');
const Interview = require('./Interview');
const Student = require('./student');
const CSV = require('./CSV');
const Passport = require('passport');
const Router = express.Router();

Router.get('/', homePage.homeController);
Router.use('/user',User);
Router.use('/Interview',Passport.checkAuthentication,Interview);
Router.use('/student',Passport.checkAuthentication,Student);

// Download CSV
Router.use('/CSV',Passport.checkAuthentication,CSV);

module.exports = Router;
