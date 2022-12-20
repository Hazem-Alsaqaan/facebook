import React, { Fragment } from "react";
import "./NavPages.css"
import { faCirclePlay, faGamepad, faHouse, faShop, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavPages =()=>{

    return(
        <Fragment>
            <nav className="nav-pages">
                        <ul>
                            <NavLink to="/home" end><li><FontAwesomeIcon icon={faHouse}/></li></NavLink>
                            <NavLink to="/watch"><li><FontAwesomeIcon icon={faCirclePlay}/></li></NavLink>
                            <NavLink to="/shopping"><li><FontAwesomeIcon icon={faShop}/></li></NavLink>
                            <NavLink to="/groups"><li><FontAwesomeIcon icon={faUsersLine}/></li></NavLink>
                            <NavLink to="/games"><li><FontAwesomeIcon icon={faGamepad}/></li></NavLink>
                        </ul>
                    </nav>
        </Fragment>
    )
}
export default NavPages;