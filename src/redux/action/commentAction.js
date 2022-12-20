import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

//add comment
export const addComment = createAsyncThunk("comments/addComment", async(item, thunkAPI)=>{
    try{
        const res = await axios.post(`http://localhost:3500/api/v1/comments`, item)
        return res.data
    }catch(err){
        console.log(`err add comment ${thunkAPI.rejectWithValue(err.message)}`)
    }
})
//get comments
export const getComments = createAsyncThunk("comments/getComments", async(_, thunkAPI)=>{
    try{
        const res = await axios.get(`http://localhost:3500/api/v1/comments`)
        return res.data
    }catch(err){
        console.log(`err get comments ${thunkAPI.rejectWithValue(err.message)}`)
    }
})
//delete comment
export const deleteComment = createAsyncThunk("comments/deleteComment", async(id, thunkAPI)=>{
    try{
        const res = await axios.delete(`http://localhost:3500/api/v1/comments/${id}`)
        return res.data
    }catch(err){
        console.log(`error from client to delete comment ${thunkAPI.rejectWithValue(err.message)}`)
    }
})