import React, { Fragment} from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import ProfileImages from "../../profile-images/ProfileImages";
import HandleCreate from "../../handle create/HandleCreate"
import "./Account.css"


const Account = ()=>{
    return(
        <Fragment>
            <Header/>
            <div className="profile-page">
                <ProfileImages />
            </div>
            <section className="container account-body">
                <HandleCreate/>
                <Posts/>
                
            </section>
        </Fragment>
    )
}
export default Account;