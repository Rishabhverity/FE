const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    clientName:
    {
        type: String,
        required: true
    },

    email:
    {
        type: String,
        required: true
    },
    
    date:
    {
        type: Date,
        required: true
    },

    noOfParticipants:
    {
        type: Number,
    },

    timeOfClass:
    {
        type: String,
        required: true
    },

    trainerAssigned:
    {
        type: String,
        required: true
    },
     
    // excelFile:
    // {
    //     data: Buffer,
    // }


}, { timestamps: true });

module.exports = mongoose.model('Batch', batchSchema);
