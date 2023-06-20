const mongoose = require('mongoose');

// Interview List Schema
const InterviewListSchema = new mongoose.Schema({
    companyName :{
        type : String,
        required : true
    },
    candidateEmail : {
        type : String,
        required : true
    },
    college : {
        type : String,
        required : true
    },
    interviewDate : {
        type : Date,
        required : true
    },
    batch: {
        type: String,
        required: true
    },
    DSA_Score:{
        type: Number,
        required: true
    },
    webD_Score:{
        type: Number,
        required: true
    },
    react_Score:{
        type: Number,
    },
    status:{
        type: String,
        required: true
    },
    result : {
        type : String,
        required : true,
        enum : ["Pass","Fail","OnHold","DidNotAttempt"]
    }

},
{
    timestamps : true
});

const InterviewList = mongoose.model('InterviewList',InterviewListSchema);

module.exports = InterviewList;
