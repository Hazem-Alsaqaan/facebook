const mongoose = require("mongoose")

const postsSchema = mongoose.Schema({
        content:{
            type: String,
        },
        image:{
            type: String,
        },
        like:{
            type: Number,
        },
        share: {
            type: Number,
        },
        users: {
            type: mongoose.Types.ObjectId,
            ref: "users",
            required: true
        }
})
const postsModel = mongoose.model("posts", postsSchema);
module.exports = {postsModel}