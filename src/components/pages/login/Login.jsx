import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../redux/action/userAction";
import { userOnLocalstorage } from "../../../redux/reducer/userSlice";
import "./Login.css"

const Login = ()=>{
    const dispatch = useDispatch()
    const users = useSelector((state)=> state.allUsers.users)
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
    useEffect(()=>{
        return async()=>{
            await dispatch(getAllUser())
        }
    },[dispatch])

    const userFilter = users.filter((user)=>{
        return user.email === email && user.password === password
    })
    const [isIncludes, setIsIncludes] = useState(true)
    
    const checkData = (e, pass)=>{
        const temp = users.includes(...userFilter)
        e.preventDefault()
        if(temp){
            setIsIncludes(true)
            dispatch(userOnLocalstorage(userFilter[0]._id))
            window.location = pass
        }else{
            setIsIncludes(false)
            e.preventDefault()
        }
    }

    return(
        <Fragment>
                <form 
                className="login m-2"
                onSubmit={(e)=>checkData(e, "/home")}
                >
                    <div className="mx-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">email</label>
                        <input 
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" 
                        className="form-control" 
                        />
                    </div>

                    <div className="mx-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                        required
                        minLength={8}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="form-control" 
                        />
                    </div>
                    <button  
                    type="submit" 
                    className="btn btn-primary"
                    >login
                    </button>
                </form>
                    <div className="text-primary">{!isIncludes ? "check password or email" : ""}</div>
                    {/* <button
                    onClick={()=>console.log(userFilter[0]._id)}>
                    console</button> */}
        </Fragment>
    )
}
export default Login;
