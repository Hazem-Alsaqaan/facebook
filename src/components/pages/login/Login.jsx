import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import "./Login.css"

const Login = ()=>{
    const {users} = useSelector((state)=>state.allUsers)
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
    const checkUser = users.some((user)=> user.email === email && user.password === password )
    const [checkStyle,setCheckStyle]=useState({opacity: "0%"})
    const handleLogin = (e)=>{
        e.preventDefault()
        if(checkUser === true){
            window.localStorage.setItem("user", JSON.stringify({email, password}))
            window.location = "/home"
        }else{
            setCheckStyle({
                    opacity:"100%",
                    transitionDuration: ".8s"
                })
        }
    }
    return(
        <Fragment>
            <div>
                <form 
                className="login mt-2"
                onSubmit={(e)=>handleLogin(e)}
                >
                    <div className="mx-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">email</label>
                        <input 
                        required
                        minLength= "10"
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" 
                        className="form-control" 
                        />
                    </div>

                    <div className="mx-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                        required
                        minLength={6}
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
                <p className="text-light m-0 text-center" style={checkStyle}>check your email or password</p>
            </div>
        </Fragment>
    )
}
export default Login;
