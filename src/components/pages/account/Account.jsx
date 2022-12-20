import React, { Fragment, useEffect} from "react";
import { useDispatch} from "react-redux";
import { getOneUser } from "../../../redux/action/userAction";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import ProfileImages from "../../profile-images/ProfileImages";
import HandleCreate from "../../handle create/HandleCreate"
import "./Account.css"


const Account = ()=>{
    const id = JSON.parse(window.localStorage.getItem("user_ID"))
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(getOneUser(id))
        }
    },[dispatch, id])
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