import React, { Fragment, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/action/userAction";
import BackgroundProfile from "../background-profile/BackgroundProfile";
import EditeAccount from "../edite account/EditeAccount";
import MainUserInfo from "../main-user-info/MainUserInfo";
import ProfileImg from "../profile img/ProfileImg";
import UserFeatures from "../userFeatures/UserFeatures";
import "./ProfileImages.css"

const ProfileImages = ()=>{
    const dispatch = useDispatch()
    const {oneUser} = useSelector((state)=> state.allUsers)
    const [userPhoto, setUserPhoto] = useState(oneUser)
    const handleUpdatephoto = (e)=>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            setUserPhoto({...userPhoto, photo: reader.result})
        })
        reader.readAsDataURL(file)
    }
    const handleSubmitPhoto = (e)=>{
        e.preventDefault()
        dispatch(updateUser(userPhoto))
    }
    const [depend, setDepend] = useState(false)
    return(
        <Fragment>
            <section className="container profile">
                <section className="profile-images ">
                    <BackgroundProfile />
                    <div className="user-content">
                        <div className="user-img">
                            <ProfileImg/>
                            <form onSubmit={(e)=>handleSubmitPhoto(e)}>
                                <input 
                                type="file"
                                onChange={(e)=>handleUpdatephoto(e)}
                                />
                                <button className="btn btn-primary" type="submit">save</button>
                            </form>
                        </div>
                        <MainUserInfo depend = {depend} setDepend = {setDepend}/>
                    </div>
                </section>
            </section>
                <UserFeatures/>
            {depend ? <EditeAccount depend={depend} setDepend = {setDepend}/>: ""}
        </Fragment>
    )
}
export default ProfileImages