const mongoose = require('mongoose');

// Interview Schema
const InterviewSchema = new mongoose.Schema({
    companyName : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        required : true
    },

    candidates:{
        type : Array,
    }
},
{
    timestamps : true
});

const Interview = mongoose.model('Interview',InterviewSchema);

module.exports = Interview;
