import React, { Fragment, useState } from "react";
import "./Login.css"

const Login = ()=>{
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
    
    const handleLogin = (e)=>{
        e.preventDefault()
        window.localStorage.setItem("user", JSON.stringify({email, password}))
        window.location = "/home"
    }

    return(
        <Fragment>
                <form 
                className="login m-2"
                onSubmit={(e)=>handleLogin(e)}
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
        </Fragment>
    )
}
export default Login;
