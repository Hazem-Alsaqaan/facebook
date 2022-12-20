import React, { Fragment } from "react";
import "./Logo.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"

const Logo = ()=>{
    return(
        <Fragment>
            <div className="logo">
                <h4><FontAwesomeIcon icon={faFacebook}/></h4>
            </div>
        </Fragment>
    )
}

export default Logo;