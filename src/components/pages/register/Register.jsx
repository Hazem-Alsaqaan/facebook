import React, { Fragment, useEffect, useState } from "react";
import "./Register.css"
import { useDispatch, useSelector } from "react-redux";
import { addNew, getAllUser } from "../../../redux/action/userAction";

const Register = ()=>{
        const users = useSelector((state)=>state.allUsers );
        const [newUser, setNewUser] = useState({
            userName: "",
            email: "",
            password: ""
        })
        const updateValue = (e)=>{
            const newData = {...newUser};
            newData[e.target.id] = e.target.value;
            setNewUser(newData)
        }
        const addNewUsers = (e)=>{
            // e.preventDefault()
            dispatch(addNew({...newUser}))
        }
        const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(getAllUser())
        },[dispatch])

        const registerValid = users.users.filter((user)=>{
            return user.email === newUser.email
        })

    return(
        <Fragment>
            <section className="register-page mx-3">
                <div className="sign-up-title">
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={(e)=>addNewUsers(e)}>
                    <div className="mb-3">
                        <label htmlFor="user-name" className="form-label">user name</label>
                        <input 
                        required
                        onChange={(e)=>updateValue(e)}
                        value= {newUser.userName}
                        id="userName"
                        type="text" 
                        className="form-control" 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                        required
                        onChange={(e)=>updateValue(e)}
                        value= {newUser.email}
                        type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                        required
                        onChange={(e)=>updateValue(e)}
                        value= {newUser.password}
                        type="password" 
                        className="form-control" 
                        id="password"/>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>

                    <button
                    type="submit" 
                    className="btn btn-primary"
                    >Register
                    </button>

                    <span className="m-2 text-danger">
                        {registerValid.length > 0 ? "this mail is already found. please: change it and try again" : ""}
                    </span>
                </form>
            </section>
        </Fragment>
    )
}
export default Register