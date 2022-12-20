const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
    },
    posts: {
        type: mongoose.Types.ObjectId,
        ref: "posts",
        required: true
    }
})
const commentModel = mongoose.model("comments", commentSchema)
module.exports = commentModel