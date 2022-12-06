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
        comments:[
            {
                comment: {type: String},
            }
        ],
})
const postsModel = mongoose.model("posts", postsSchema);
module.exports = {postsModel}