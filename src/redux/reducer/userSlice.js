import {createSlice} from "@reduxjs/toolkit"
import {addNew, getAllUser, getOneUser, updateUser} from "../action/userAction"

// get all user reducer slice
const userSlice = createSlice({
    name: "users",
    initialState: {users:[], oneUser:{}, isLoading: false, err: ``, isLogin: false},
    reducers:{
        userOnLocalstorage:(state, action)=>{
            window.localStorage.setItem("user_ID", JSON.stringify(action.payload))
        }
    },
    extraReducers: (builder)=>{
        // get
        builder
        .addCase(getAllUser.pending, (state, action)=>{
                    state.isLoading = true;
                })
        .addCase(getAllUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.users = action.payload
        })
        .addCase(getAllUser.rejected, (state, action)=>{
            state.isLoading = false;
            console.log("user rejected")
        })
        // post 
        builder
        .addCase(addNew.pending, (state, action)=>{
                    state.isLoading = true;
                })
        .addCase(addNew.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.users = [...state.users, action.payload]
        })
        .addCase(addNew.rejected, (state, action)=>{
            state.isLoading = false;
            console.log("rejected to add new user")
        })
        //update user
        builder
        .addCase(updateUser.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(updateUser.fulfilled, (state, action)=>{
            state.isLoading = false
            state.oneUser = action.payload
        })
        .addCase(updateUser.rejected, (state, action)=>{
            state.isLoading = false
        })
        // get one user
        builder
        .addCase(getOneUser.pending, (state, action)=>{
            state.isLoading = true;
        })
        .addCase(getOneUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.oneUser = action.payload;
        })
        .addCase(getOneUser.rejected, (state, action)=>{
            state.isLoading = false;
        })
    }
})
export const {userOnLocalstorage} = userSlice.actions
export default userSlice.reducer
