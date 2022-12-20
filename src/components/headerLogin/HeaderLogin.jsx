import React, { Fragment } from "react";
import Login from "../pages/login/Login";
import "./HeaderLogin.css"

const HeaderLogin = ()=>{
    return(
        <Fragment>
            <article className="header-login">
                <div className="container-fluid header-login-content">
                    <h1>facebook</h1>
                    <Login/>
                </div>
            </article>
        </Fragment>
    )
}
export default HeaderLogin