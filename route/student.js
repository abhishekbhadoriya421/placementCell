const express = require('express');
const studentController = require('../controller/studentController');
const router = express.Router();

router.post('/addStudent', studentController.AddStudent);

module.exports = router;