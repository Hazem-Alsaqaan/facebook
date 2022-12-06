const {usersModels} = require("../models/usersModel")
const ApiError = require("../utilities/ApiError")

//add new user
const addNewUser = async (req, res, next)=>{
    const {
        userName,
        email,
        password,
        photo,
        background_img,
        job,
        posts,
        followers,
        following
    } = req.body;
        try{
            const newUser = await usersModels.create(
                {
                    userName,
                    email,
                    password,
                    photo,
                    background_img,
                    job,
                    posts,
                    followers,
                    following
                }
            )
            return res.status(200).json(newUser)
        }catch(err){
            next(new ApiError(`sorry ${err} can't create new user`, 401))
        }
}
// get all users
const getAllUsers = async (req, res, next)=>{
    try{
        const users = await usersModels.find()
        return res.status(200).json(users)
    }catch(err){
        next(new ApiError(`sorry ${err} can't find all users`, 401))
    }
}
// get a user
const getUser = async (req, res, next)=>{
    const {id} = await req.params;
    try{
        const user = await usersModels.findById(id)
        return res.status(200).json(user)
    }catch(err){
        next(new ApiError(`sorry ${err} can't get this user`, 401))
    }
}
//update user
const updateUser = async (req, res, next)=>{
    const {id} = req.params;
    const {
        userName,
        email,
        password,
        photo,
        background_img,
        job,
        posts,
        followers,
        following
    } = req.body
    try{
        const updatedUser = await usersModels.findByIdAndUpdate(
            id, 
            {
                userName,
                email,
                password,
                photo,
                background_img,
                job,
                posts,
                followers,
                following
            }, {new: true})
            return res.status(200).json(updatedUser)
    }catch(err){
        next(new ApiError(`sorry ${err} can't update user`, 401))
    }
}
//delete a user 
const deleteUser = async (req, res, next)=>{
    const {id} = req.params
    try {
        const deletedUser = await usersModels.findByIdAndRemove(id)
        return res.status(200).json(deletedUser)
    } catch (err) {
        next(new ApiError(`sorry ${err} can't delete user`, 401))
    }
}

module.exports = {
    addNewUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}