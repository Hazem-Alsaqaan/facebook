import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

//get posts
export const getPosts = createAsyncThunk("posts/getPosts", async(_ , thunkAPI)=>{
    try{
        const result = await axios.get(`http://localhost:3500/api/v1/posts`)
        return result.data
    }catch(err){
        console.log(`err from client to get posts ${thunkAPI.rejectWithValue(err.message)}`)
    }
})
//add post
export const addPost = createAsyncThunk("posts/addPost", async(item, thunkAPI)=>{
    try{
        const result = await axios.post(`http://localhost:3500/api/v1/posts`, item)
        return result.data
    }catch(err){
        console.log(`err from client to add posts ${thunkAPI.rejectWithValue(err.message)}`)
    }
})
//delete post
export const deletePost = createAsyncThunk("posts/deletePost", async(id, thunkAPI)=>{
    try{
        const result = await axios.delete(`http://localhost:3500/api/v1/posts/${id}`)
        return result.data
    }catch(err){
        console.log(`err from client to delete post ${thunkAPI.rejectWithValue(err.message)}`)
    }
})