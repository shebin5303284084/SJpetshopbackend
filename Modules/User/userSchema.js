var mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },


    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },


    city: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
// jigkrlg

})
module.exports = new mongoose.model("user", userschema)
