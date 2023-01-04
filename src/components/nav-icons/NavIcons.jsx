import React, { Fragment } from "react";
import "./NavIcons.css"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBell, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProfileImg from "../profile img/ProfileImg";

const NavIcons = ()=>{
    return(
        <Fragment>
            <div className="nav-icons">
                        <ul>
                            <li><FontAwesomeIcon icon={faTableCells}/></li>
                            
                            <li><FontAwesomeIcon icon={faFacebookMessenger}/></li>
                            <li><FontAwesomeIcon icon={faBell}/></li>
                            <Link to="/account">
                                <li>
                                    <ProfileImg />
                                </li>
                            </Link>
                        </ul>
            </div>
        </Fragment>
    )
}
export default NavIcons;