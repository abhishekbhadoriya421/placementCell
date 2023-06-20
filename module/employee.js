const mongoose = require('mongoose');

// Employee Schema
const EmployeeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;