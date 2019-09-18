const mongoose = require('mongoose')

const Contact = mongoose.model('contact', {
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String
    }
})

module.exports = Contact

