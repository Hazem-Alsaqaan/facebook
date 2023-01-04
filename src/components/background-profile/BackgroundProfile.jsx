import React, { Fragment, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/action/userAction";
import "./BackgroundProfile.css"


const BackgroundProfile = ()=>{
    const {isLoading} = useSelector((state)=>state.allUsers)
    const {oneUser} = useSelector((state)=> state.allUsers)
    const [updateBackground, setUpdateBackground] = useState(oneUser)
    const dispatch = useDispatch()
    // upload background user
    const uploadBackground = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
            reader.addEventListener("load", ()=>{
                setUpdateBackground({...updateBackground, background_img: reader.result});
            })
        reader.readAsDataURL(file)
    }
    const submitBackground = useCallback((e)=>{
        e.preventDefault()
        dispatch(updateUser(updateBackground))
    },[dispatch, updateBackground])


    return(
        <Fragment>
            {
            isLoading ? <span>Loading...</span> : 
            <div className="background-profile">
                        <img src={
                            oneUser.background_img 
                            ? oneUser.background_img 
                            : "https://img.freepik.com/premium-photo/abstract-empty-grey-background_1258-1855.jpg"} 
                            alt="background removed"
                        /> 
                        <form 
                        className="edit-picture m-2"
                        onSubmit={(e)=>submitBackground(e)}>
                            <input 
                                onChange={(e)=>uploadBackground(e)}
                                type="file"
                                />
                            <button 
                            className="btn btn-primary"
                            type="submit"
                            >save</button>
                        </form>
                </div>}
        </Fragment>
    )
}
export default BackgroundProfile;