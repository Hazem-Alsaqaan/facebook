import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const userLogin = createAsyncThunk("users/userLogin", async(item, thunkApi)=>{
    try{
        const res = await axios.post(`http://localhost:3500/api/v1/login`, item)
        return res.data
    }catch(err){
        return `Error: From Client To Login ${err}`
    }
})