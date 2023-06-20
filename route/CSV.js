const CSVcontroller = require('../controller/downloadCSVController');
const Route = require('express').Router();
Route.get('/download', CSVcontroller.downloadCSV);
module.exports = Route;