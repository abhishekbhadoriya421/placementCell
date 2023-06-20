const mongoose = require('mongoose');

// Student Schema
const StudentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true
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
    }
}, {
    timestamps: true
});


const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;