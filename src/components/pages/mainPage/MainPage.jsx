import React, { Fragment } from "react";
import HeaderLogin from "../../headerLogin/HeaderLogin";
import Register from "../register/Register";
import "./MainPage.css"

const MainPage = ()=>{
    return(
        <Fragment>
            <HeaderLogin/>
            <section className="container main-page">
                <div className="leftside-mainPage">
                    <h2>
                        Connect with friends and the world around you on Facebook.
                    </h2>
                    <h6>See photos and updates from friends in News Feed</h6>
                    <h6>Share what's new in your life on your timeline</h6>
                    <h6>Find more of what you're looking for with graph search</h6>
                </div>
                <Register/>
            </section>
        </Fragment>
    )
}
export default MainPage;