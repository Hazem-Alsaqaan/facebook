import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/action/userAction";
import "./EditeAccount.css"

const EditeAccount = ({ depend, setDepend})=>{
    const {oneUser} = useSelector((state)=> state.allUsers)

    const [changedUser, setChangedUser] = useState({
        userName: oneUser.userName,
        job: oneUser.job,
        password: oneUser.password
    })
    const dispatch = useDispatch();
    const [userUpdate, setUserUpdate] = useState(oneUser)
    const editeUser = (e)=>{
        e.preventDefault()
        setUserUpdate(
            {...userUpdate,
                userName: changedUser.userName,
                job: changedUser.job, 
                password: changedUser.password
            })
        dispatch(updateUser(userUpdate))
    }
    return(
        <Fragment>
            <form 
            className="edite-account m-5 p-5"
            onSubmit={(e)=>editeUser(e)}
            >
                <label htmlFor="update-name">name:</label>
                <input 
                className="form-control use-name m-1"
                placeholder="userName"
                name="new-user-name"
                id="update-name"
                type="text"
                value={changedUser.userName}
                onChange={(e)=>setChangedUser({...changedUser, userName: e.target.value})}
                />
                <label htmlFor="update-job">job:</label>
                <input
                className="form-control job m-1"
                placeholder="job"
                name="new-user-job"
                id="update-job"
                type="text"
                value={changedUser.job}
                onChange={(e)=>setChangedUser({...changedUser, job: e.target.value})}
                />
                <label htmlFor="update-password">password:</label>
                <input
                className="form-control password m-1"
                placeholder="password"
                name="new-user-password"
                id="update-password"
                type="password"
                value={changedUser.password}
                onChange={(e)=>setChangedUser({...changedUser, password: e.target.value})}
                />
                <button 
                type="submit" 
                className="btn btn-primary m-4"
                onDoubleClick={()=>setDepend(!depend)}
                >save
                </button>
                <span>if you sure double click please</span>
            </form>
        </Fragment>
    )
}
export default EditeAccount;