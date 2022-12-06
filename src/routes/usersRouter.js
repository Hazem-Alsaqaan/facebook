const usersRouter = require("express").Router();
const { addNewUser, getAllUsers, getUser, updateUser, deleteUser } = require("../controller/usersController");

usersRouter.get("/", getAllUsers)
usersRouter.post("/", addNewUser)
usersRouter.put("/:id", updateUser)
usersRouter.delete("/:id", deleteUser)
usersRouter.get("/:id", getUser)

module.exports = {usersRouter};