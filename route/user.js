const express = require('express');
const sessionPageController = require('../controller/sessionPageController');
const passport = require('passport');

const router = express.Router();
router.get('/loginPage', sessionPageController.logInPage);
router.get('/signupPage', sessionPageController.signUpPage);
router.get('/signOut',sessionPageController.destroySession);


// Post Method
router.post('/create',sessionPageController.create);
router.post('/createSession', 
passport.authenticate(
    'local',
    {
        failureRedirect: '/user/loginPage',
    }
)
,sessionPageController.createSession);


module.exports = router;