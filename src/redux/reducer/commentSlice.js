import {createSlice} from "@reduxjs/toolkit"
import { addComment, deleteComment, getComments } from "../action/commentAction"

const commentSlice = createSlice({
    name: "comments",
    initialState: {comments: [], comment: {}, isLoading: false},
    reducers: {},
    extraReducers: (builder)=>{
        //add new comment
        builder.addCase(addComment.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(addComment.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.comment = action.payload;
        })
        builder.addCase(addComment.rejected, (state, action)=>{
            state.isLoading = false
        })
        //get comments
        builder.addCase(getComments.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getComments.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.comments = [...action.payload]
        })
        builder.addCase(getComments.rejected, (state, action)=>{
            state.isLoading = false
        })
        //delete comment
        builder.addCase(deleteComment.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(deleteComment.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.comments = state.comments.filter((comment)=> {return comment._id !== action._id})
        })
        builder.addCase(deleteComment.rejected, (state, action)=>{
            state.isLoading = false;
        })

    }
})

export default commentSlice.reducer