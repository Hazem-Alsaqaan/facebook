const mongoose = require("mongoose");

const usersSchema =  new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        max: 32,
        min: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 8,
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
})

const usersModels = mongoose.model("users", usersSchema);
module.exports = {usersModels};