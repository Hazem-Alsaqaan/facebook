const { login } = require("../controller/loginController")

const loginRouter = require("express").Router()

loginRouter.post("/", login)

module.exports = {loginRouter}