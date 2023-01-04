const { usersModels } = require("../models/usersModel")
const bcrypt = require("bcrypt")
const ApiError = require("../utilities/ApiError")


const login = async(req, res, next)=>{
    const {email, password} = req.body
    try{
        const userLogedin = await usersModels.findOne({email, password})
        if(!userLogedin){
            return res.status(404).json("check your email or password\"if you not register please register first and try again\" ")
        }else{
            const checkEmail = bcrypt.compare(email, userLogedin.email)
            const checkPassword = bcrypt.compare(password, userLogedin.password)
            if(checkEmail && checkPassword){
                return res.status(200).json(userLogedin)
            }
        }
    }catch(err){
        next(new ApiError(`Login Error From Server ${err}`, 500))
    }
}

module.exports = {
    login
}