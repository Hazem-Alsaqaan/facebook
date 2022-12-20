import React, { Fragment } from "react";
import "./Story.css"
import ProfileImg from "../profile img/ProfileImg";
import story001 from "../../pictures/story001.jpg"
import story002 from "../../pictures/story002.png"
import story003 from "../../pictures/story003.jpg"
import story004 from "../../pictures/story004.jpg"
import { useSelector } from "react-redux";

const Story = ()=>{
    const {oneUser} = useSelector((state)=> state.allUsers)

    return(
        <Fragment>
            <div className="stories">
                <section className="story mx-1">
                    <div className="box-story">
                        <div className="story-profile-img">
                            <ProfileImg/>
                        </div>
                        <img src={story001} alt="..."/>
                        <p>{oneUser.userName}</p>
                    </div>
                </section>
                <section className="story mx-1">
                    <div className="box-story">
                        <div className="story-profile-img">
                            <ProfileImg/>
                        </div>
                        <img src={story002} alt="..."/>
                        <p>{oneUser.userName}</p>
                    </div>
                </section>
                <section className="story mx-1">
                    <div className="box-story">
                        <div className="story-profile-img">
                            <ProfileImg/>
                        </div>
                        <img src={story003} alt="..."/>
                        <p>{oneUser.userName}</p>
                    </div>
                </section>
                <section className="story mx-1">
                    <div className="box-story">
                        <div className="story-profile-img">
                            <ProfileImg/>
                        </div>
                        <img src={story004} alt="..."/>
                        <p>{oneUser.userName}</p>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Story;