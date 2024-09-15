const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    present: { 
        type: Boolean,
        //required: true
    },
    name: { 
        type: String,
        required: true
    },
    emailID: { 
        type: String,
        required: true
    },
    // remarks: { 
    //     type: String,
    //     required: true
    // },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;