import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./MainUserInfo.css"
const MainUserInfo = ({ depend, setDepend})=>{
    const {oneUser} = useSelector((state)=> state.allUsers)

    return(
        <Fragment>
            <article className="main-user-info">
                <div className="text">
                    <h3 className="m-1 person-name">{oneUser.userName}</h3>
                    <h6 className="user-job">{oneUser.job}</h6>
                </div>
                <div className="btn-section">
                    <button 
                    className="btn btn-primary m-1 add-story"
                    >add to story
                    </button>
                    <button 
                    className="btn btn-outline-primary m-1 edit-profile"
                    onClick={()=>setDepend(!depend)}
                    >edit profile
                    </button>
                </div>
            </article>
        </Fragment>
    )
}
export default MainUserInfo