const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const db = require("./db")
const ApiError = require("./src/utilities/ApiError")
const {usersRouter} = require("./src/routes/usersRouter")
const { postsRouter } = require("./src/routes/postsRouter");
const {commentRouter} = require("./src/routes/commentRouter");
const {loginRouter} = require("./src/routes/loginRouter")

const app = express();

//add cors
app.use(cors())
//handle middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
// config dotenv
dotenv.config({
    path: ".env"
})
const PORT = process.env.PORT
// handle global route
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/login", loginRouter);
app.all("*", (req, res, next)=>{
    next(new ApiError(`this route ${req.originalUrl} is not correct`, 404))
})
// handle global error
app.use((err, req, res, next)=>{
    res.status(err.statusCode).json({
        message: err.message,
        stack: err.stack
    })
})

// server listener
    app.listen(PORT, ()=>{
        console.log("server is running..............")
    })
