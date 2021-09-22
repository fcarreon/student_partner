const { Schema, model } = require('mongoose')

const help_request = new Schema({
    student: {
        type: String,
        required: true
    },
    partner: {
        type: String, 
        required: false
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false
    },

}, {
    timestamps: true
});

module.exports = model("help_request", help_request)

