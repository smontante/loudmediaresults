const mongoose = require('mongoose')

const Lead = mongoose.model('lead', {
    address: {
        type: String,
    },
    price: {
        type: String,
    },
    score: {
        type: String,
    },
    experience: {
        type: String
    }
})

module.exports = Lead

