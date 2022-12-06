const { getPosts, addPost, deletePost, updatePost, getOnePost } = require("../controller/postsController")

const postsRouter = require("express").Router()

postsRouter.get("/", getPosts);
postsRouter.post("/", addPost);
postsRouter.delete("/:id", deletePost);
postsRouter.put("/:id", updatePost);
postsRouter.get("/:id", getOnePost)

module.exports = {postsRouter}