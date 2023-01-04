import { faBookmark, faCirclePlay, faClockRotateLeft, faFlag, faShop, faSortDown, faUserGroup, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProfileImg from "../profile img/ProfileImg";
import Shortcuts from "../shortcuts/Shortcuts";
import "./LeftSide.css"

const LeftSide = ()=>{
    const {oneUser} = useSelector((state)=> state.allUsers)
    const handleLogout = ()=>{
        window.localStorage.removeItem("user")
        window.location = "/"
    }

    return(
        <Fragment>
            <div className="left-side">
                <ul>
                    <div>
                    <ProfileImg />
                    <span className="user-name">{oneUser.userName}</span>
                    </div>
                    <li><FontAwesomeIcon icon={faUserGroup}/>friends</li>
                    <li><FontAwesomeIcon icon={faUsersLine}/>groups</li>
                    <li><FontAwesomeIcon icon={faShop}/>marketplace</li>
                    <li><FontAwesomeIcon icon={faCirclePlay}/>watchs</li>
                    <li><FontAwesomeIcon icon={faClockRotateLeft}/>memories</li>
                    <li className="bookmark"><FontAwesomeIcon icon={faBookmark}/>saved</li>
                    <li className="flag"><FontAwesomeIcon icon={faFlag}/>pages</li>
                    <li><FontAwesomeIcon icon={faSortDown}/>see more...</li>
                    <Shortcuts/>
                    <button 
                    className="m-1 btn btn-danger"
                    onClick={handleLogout}
                    >logout
                    </button>
                </ul>
            </div>
        </Fragment>
    )
}
export default LeftSide;