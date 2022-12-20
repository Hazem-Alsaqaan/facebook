import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./ProfileImg.css"

const ProfileImg = ()=>{
    const {oneUser} = useSelector((state)=>state.allUsers)
    const {isLoading} = useSelector((state)=>state.allUsers)
    return(
        <Fragment>
            {isLoading ? <span>Loading...</span>: 
            <img 
            className="personal-img" 
            src={oneUser.photo? oneUser.photo: `https://i.pinimg.com/474x/83/0a/82/830a8274e9d37f5530538d9357ebf3d8.jpg`} alt="profile img"
            />
            }
        </Fragment>
    )
}

export default ProfileImg;