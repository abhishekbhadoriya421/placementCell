const express = require('express');
const InterviewController = require('../controller/InterviewController');
const passport = require('passport');
const router = express.Router();

// Get Request
router.get('/update',InterviewController.updateResult);


// Post Request
router.post('/addInterview', InterviewController.addInterview);
router.post('/allotedInterview',InterviewController.allotedInterview);

module.exports = router;