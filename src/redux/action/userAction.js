import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

// get all users action
export const getAllUser = createAsyncThunk("users/getAllUser", async(_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get(`http://localhost:3500/api/v1/users`)
        const data = res.data
        return data   
    }catch(err){
        console.log(`error to get all user${rejectWithValue(err.message)}`)
    }
})
// add new users action
export const addNew = createAsyncThunk("users/addNew", async(item, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.post(`http://localhost:3500/api/v1/users`, item)
        const result = await res.data
        return result   
    }catch(err){
        console.log(`error to add new user ${rejectWithValue(err.message)}`)
    }
})
//update user
// export const updateUser = createAsyncThunk("users/updateUser", async(id, item,thunkAPI)=>{
//     const {rejectWithValue} = thunkAPI
//     try{
//         const res = await fetch(`http://localhost:3500/api/v1/users/${id}`, 
//         {
//             method: "put",
//             body: JSON.stringify(item),
//             headers: {"Content-type": "application/json; charset=UTF-8"}
//         })
//         const result = await res.json()
//         return result
//     }catch (err) {
//         console.log(`error to update this user ${rejectWithValue(err.message)}`)
//     }
// })




// export const addNew = createAsyncThunk("users/addNew", async(item, thunkAPI)=>{
    //     const {rejectWithValue} = thunkAPI
    //     try{
        //         const res = await fetch(`http://localhost:8000/api/v1/lawyer`,
        //         {method: "post",
        //         body: JSON.stringify(item),
        //         headers: {"Content-type": "application/json; charset=UTF-8"}
        //         })
        //         const data = await res.json()
        //         return data   
        //     }catch(err){
            //         console.log(`error to get all user ${rejectWithValue(err.message)}`)
            //     }
// })


// update user
export const updateUser = createAsyncThunk("users/updateUser", async(item, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.put(`http://localhost:3500/api/v1/users/${item._id}`, 
        {
            userName: item.userName,
            email: item.email,
            password: item.password,
            photo: item.photo,
            background_img: item.background_img,
            job: item.job,
            posts: item.posts,
            followers: item.followers,
            following: item.following
        })
        const result = await res.data
        return result
    }catch (err) {
        console.log(`error to update this user ${rejectWithValue(err.message)}`)
    }
})