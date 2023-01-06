const mongoose = require("mongoose");

const usersSchema =  new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxLength: 32,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxLength: 50,
        minLength: 10
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
    },
    photo: {
        type: String,
    },
    background_img: {
        type: String,
    },
    job: {
        type: String
    },
    posts: [],
    followers: [],
    following: []
}, {timestamps: true})

const usersModels = mongoose.model("users", usersSchema);
module.exports = {usersModels};