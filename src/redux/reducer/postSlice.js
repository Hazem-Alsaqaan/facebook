import {createSlice} from "@reduxjs/toolkit"
import { addPost, deletePost, getPosts } from "../action/postAction"

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        post: {
            content: "",
            image: "",
            like: 0,
            share: 0,
        },
        isLoading: false
    },
    reducers:{},
    extraReducers: (builder)=>{
        //get posts
        builder.addCase(getPosts.pending, (state, action)=>{
            state.isLoading = true
            console.log("get posts is pending")
        })
        builder.addCase(getPosts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.posts = action.payload
        })
        builder.addCase(getPosts.rejected, (state, action)=>{
            state.isLoading = false
            console.log("get posts is rejected")
        })
        //add post
        builder.addCase(addPost.pending, (state, action)=>{
            state.isLoading = true
            console.log("add post is pending")
        })
        builder.addCase(addPost.fulfilled, (state, action)=>{
            state.isLoading = false
            state.post = action.payload
            state.posts = [...state.posts, action.payload]
        })
        builder.addCase(addPost.rejected, (state,action)=>{
            state.isLoading = false
            console.log("add post is rejected")
        })
        //delete post 
        builder.addCase(deletePost.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(deletePost.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = state.posts.filter((item)=> { return item._id !== action.payload._id})
        })
        builder.addCase(deletePost.rejected, (state, action)=>{
            state.isLoading = false;
            console.log("rejected delete post")
        })
    }
})

export default postSlice.reducer