const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for the database is created here
const logSchema = new Schema({
    range: {
        type: String,
        required: true
    },
    timeElapsed: {
        type: String,
        required: true
    },
    algorithm: {
        type: String,
        required: true
    },
    numberOfPrime: {
        type: String,
        required: true
    }
},{timestamps: true})

// Schema is provided to the database
const Log = mongoose.model('Log', logSchema);
module.exports = Log;