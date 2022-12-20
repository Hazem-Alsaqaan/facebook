import React, { Fragment } from "react";
import Sponsored from "../sponser/Sponser";
import "./RightSide.css"

const RightSide = ()=>{
    return(
        <Fragment>
            <div className="right-side">
                <Sponsored/>
            </div>
        </Fragment>
    )
}
export default RightSide