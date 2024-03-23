import React from "react";
import "./comment.css";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";

type CommentProps = {
    profileImg: string;
    fullName: string;
    comment: string;
    postedTime: string;
    likeCount: number;
    dislikeCount: number;
};

const Comment = (props: CommentProps) => {
    return (
        <div className="comment">
            <img src={props.profileImg} alt="" />
            <div>
                <h3>
                    {props.fullName} <span>{props.postedTime}</span>
                </h3>
                <p>{props.comment}</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>{props.likeCount}</span>
                    <img src={dislike} alt="" />
                    <span>{props.dislikeCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Comment;
