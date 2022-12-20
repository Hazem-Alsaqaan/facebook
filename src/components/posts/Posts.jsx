import React, { Fragment } from "react";
import ProfileImg from "../profile img/ProfileImg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons"
import {faCommentDots} from "@fortawesome/free-regular-svg-icons"
import {faShareFromSquare} from "@fortawesome/free-solid-svg-icons"
import "./Posts.css"
import {useDispatch, useSelector} from "react-redux"
import { deletePost, getPosts } from "../../redux/action/postAction";
import { useState } from "react";
import CommentList from "../comment list/CommentList";
import { useEffect } from "react";

const Posts = ()=>{
    const {oneUser} = useSelector((state)=> state.allUsers)


    const [commentToggil, setCommentToggil] = useState(false) 
    const dispatch = useDispatch()
    const posts = useSelector((state)=> state.allPosts)
    //delete post
    const handleDeletePost = (id)=>{
        dispatch(deletePost(id))
    }
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

        return(
        <Fragment>
            {posts.posts.isLoading?<h1>Loading...</h1> : 
            posts.posts.map((post)=>
                <article key={post._id} className="post-box">
                    <div className="auther-info">
                        <div className="auther-img">
                            <ProfileImg/>
                        </div>
                        <div className="mx-1 my-0">
                            <p className="bg-light">{post.users.userName === oneUser.userName ? oneUser.userName : `Owner Post: ${post.users.userName}`}</p>
                            <p className="date">{Date()}</p>
                        </div>
                        <button 
                        onClick={()=>handleDeletePost(post._id)}
                        className="btn btn-danger"
                        >remove
                        </button>
                    </div>
                    <div className="post-text">
                        <p>{post.content}</p>
                    </div>
                    <div className="post-img">
                        <img src={post.image? post.image : ""} alt=""/>
                    </div>
                    <div className="post-count-action">
                            <div>
                                <span>{post.like}</span>
                            </div>
                            <div>
                                <span>{`${post.share} shares`}</span>
                            </div>
                    </div>
                    <div className="post-actions">
                        <div className="post-reaction">
                            <span><FontAwesomeIcon icon={faThumbsUp}/>like</span>
                            <span
                            onClick={()=>setCommentToggil(!commentToggil)}
                            >
                                <FontAwesomeIcon icon={faCommentDots}/>
                                comment
                            </span>
                            <span><FontAwesomeIcon icon={faShareFromSquare}/>share</span>
                        </div>
                    </div>
                    {commentToggil? <CommentList post = {post} commentToggil = {commentToggil}/>: ""}
                </article>
            )
            }
        </Fragment>
    )
}
export default Posts