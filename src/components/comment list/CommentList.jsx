import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deleteComment, getComments } from "../../redux/action/commentAction";
import "./CommentList .css"

const CommentList = ({post, commentToggil})=>{
    const {isLoading} = useSelector((state)=> state.allComments)
    const {comments} = useSelector((state)=> state.allComments)
    // const {comment} = useSelector((state)=> state.allComments)
    const [newComment, setNewComment] = useState({})
    const dispatch = useDispatch()
    const handleNewComment = (e)=>{
        setNewComment({...newComment, comment: e.target.value, posts: post._id})
    }
    const submitComment = ()=>{
        dispatch(addComment(newComment))
    }
    //delete comment
    const handleDeletecomment = (id)=>{
        dispatch(deleteComment(id))
    }
    useEffect(()=>{
        return ()=>{
            if(commentToggil){
                dispatch(getComments())
            }
        }
    },[commentToggil, dispatch])
    return(
        <Fragment>
            {isLoading? <h5>Loading...</h5>: 
                <div className="comment-list">
                    {comments.map((item)=>
                        <div key={item._id}>
                            <span  className="comment">{item.comment}</span>
                                <button 
                                className="btn btn-danger p-0 fs-6 m-1"
                                type="submit"
                                onClick={()=>handleDeletecomment(item._id)}
                                >clear
                                </button>
                        </div>
                    )}
                </div>
            }
            <form 
            onSubmit={(e)=>submitComment(e)}
            className="comments my-4 d-flex"
            >
                <input
                className="form-control"
                placeholder="write comment"
                onChange={(e)=>handleNewComment(e)}
                type="text"/>
                <button
                className="btn btn-dark p-1"
                >submit
                </button>
            </form>
        </Fragment>
    )
}
export default CommentList