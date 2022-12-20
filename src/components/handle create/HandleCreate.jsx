import React, { Fragment, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faImages, faFaceGrinWink} from "@fortawesome/free-regular-svg-icons"
import {faFileVideo} from "@fortawesome/free-solid-svg-icons"
import ProfileImg from "../profile img/ProfileImg";
import { useDispatch, useSelector } from "react-redux"
import "./HandleCreate.css"
import { addPost } from "../../redux/action/postAction";


const HandleCreate = ()=>{
    const {oneUser} = useSelector((state)=> state.allUsers)
    const [postText, setPostText] = useState("");
    const [imgPost, setImgPost] = useState("")
    const {post} = useSelector((state)=>state.allPosts)
    const dispatch = useDispatch()

    //handle upload post img
    const handleUploadImg = (e)=>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            setImgPost(reader.result)
        })
        reader.readAsDataURL(file)
    }
    // Handle Share Post
    const handleShare =(e)=>{
        if(postText){
            dispatch(addPost({...post, content: postText, image: imgPost, users: oneUser._id}))
        }
    }

    return(
        <Fragment>
            <article className="handle-create">
                <h2 className="text-center">Create Post</h2>
                <section>
                    <div>
                        <ProfileImg/>
                    </div>
                    <span className="mx-1">{oneUser.userName}</span>
                </section>
                <textarea
                className="my-4"
                onChange={(e)=> setPostText(e.target.value)}
                placeholder={`what's on your mind ${oneUser.userName}`}
                ></textarea>
                <div className="share-image">
                    <img src={imgPost? imgPost: ""} alt=""/>
                </div>
                <article className="in-your-mind">
                    <div className="text">
                        <span>
                            <FontAwesomeIcon className="px-1 text-danger fs-4" icon={faFileVideo}/>
                            video
                        </span>
                        <span>
                            <FontAwesomeIcon className="px-1 text-success fs-4" icon={faImages}/>
                            photo
                        </span>
                        <span>
                            <FontAwesomeIcon className="px-1 text-warning fs-4" icon={faFaceGrinWink}/>
                            feeling/activity
                        </span>
                    </div>
                    <form>
                        <input
                        type="file"
                        onChange={(e)=>handleUploadImg(e)}
                        />
                    </form>
                </article>
                <button 
                onClick={(e)=>handleShare(e)}
                className="btn btn-primary"
                >post
                </button>
            </article>
        </Fragment>
    )
}
export default HandleCreate