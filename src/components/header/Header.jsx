import React, { Fragment } from "react";
import "./Header.css"
import Logo from "../logo/Logo";
import Search from "../search/Search";
import NavPages from "../nav-pages/NavPages";
import NavIcons from "../nav-icons/NavIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ()=>{
    return(
        <Fragment>
            <header>
                <div className="container-fluid header-content">
                    <div className="logo-search">
                        <Logo/>
                        <Search/>
                    </div>
                    <FontAwesomeIcon className="faBar" icon={faBars}/>
                    <NavPages/>
                    <NavIcons/>
                </div>
            </header>
        </Fragment>
    )
}
export default Header;