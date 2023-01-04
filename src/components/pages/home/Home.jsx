import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../redux/action/postAction";
import CenterSide from "../../center side/CenterSide";
import Header from "../../header/Header";
import LeftSide from "../../left side/LeftSide";
import RightSide from "../../right side/RightSide";
import "./Home.css"

const Home = ()=>{
    const dispatch = useDispatch();
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