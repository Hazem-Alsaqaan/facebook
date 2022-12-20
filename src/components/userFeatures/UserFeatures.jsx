import React, { Fragment } from "react";
import "./UserFeatures.css"


const UserFeatures = ()=>{
    return (
        <Fragment>
            <ul className="user-features">
                <li>post</li>
                <li>about</li>
                <li>friends</li>
                <li>photos</li>
                <li>videos</li>
                <li>check</li>
                <li>more...</li>
            </ul>
        </Fragment>
    )
}
export default UserFeatures;