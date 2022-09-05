const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    primeNumbers: {
        type: String,
        required: true
    },
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

const Log = mongoose.model('Log', logSchema);
module.exports = Log;