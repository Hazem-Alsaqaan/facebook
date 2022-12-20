import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../redux/action/postAction";
import { getOneUser } from "../../../redux/action/userAction";
import CenterSide from "../../center side/CenterSide";
import Header from "../../header/Header";
import LeftSide from "../../left side/LeftSide";
import RightSide from "../../right side/RightSide";
import "./Home.css"

const Home = ()=>{
    const id = JSON.parse(window.localStorage.getItem("user_ID"))
    const dispatch = useDispatch();

    useEffect(()=>{
        return  ()=>{
            dispatch(getOneUser(id))
        }
    },[dispatch, id])

    useEffect(()=>{
        return ()=>{
            dispatch(getPosts())
        }
    },[dispatch])
    return(
        <Fragment>
            <Header/>
            <div className="container-fluid px-0">
                <div className="home-content">
                    <LeftSide />
                    <CenterSide />
                    <RightSide/>
                </div>
            </div>
        </Fragment>
    )
}
export default Home;