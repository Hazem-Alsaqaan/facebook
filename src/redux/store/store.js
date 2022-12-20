import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../reducer/userSlice"
import postSlice from "../reducer/postSlice"
import commentSlice from "../reducer/commentSlice"

const store = configureStore({
    reducer: 
    {
        allUsers: userSlice,
        allPosts: postSlice,
        allComments: commentSlice
    }
})

export default store
