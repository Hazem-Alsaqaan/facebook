import React, { Fragment } from "react";
import "./Center.css"
import Story from "../stories/Story";
import Posts from "../posts/Posts";
import HandleCreate from "../handle create/HandleCreate";

const CenterSide = ()=>{
    
    return(
        <Fragment>
            <div className="center-side">
                <Story />
                <HandleCreate />
                <Posts />
            </div>
        </Fragment>
    )
}
export default CenterSide;