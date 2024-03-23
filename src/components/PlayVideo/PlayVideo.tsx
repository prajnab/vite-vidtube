import React from "react";
import "./playVideo.css";

import video_recording from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import Comment from "../Comment/Comment";
import Publisher from "../Publisher/Publisher";
import { Video } from "../../services/data.service";

type PlayVideoProps = {
    data: Video;
};

const PlayVideo = ({ data }: PlayVideoProps) => {
    return (
        <div className="play-video">
            <video src={video_recording} controls autoPlay muted></video>
            <h3>{data.title}</h3>
            <div className="play-video-info">
                <p>
                    {data.view_count} Views &bull; {data.posted_time}
                </p>
                <div>
                    <span>
                        <img src={like} alt="" /> {data.like_count}
                    </span>
                    <span>
                        <img src={dislike} alt="" /> {data.dislike_count}
                    </span>
                    <span>
                        <img src={share} alt="" /> Share
                    </span>
                    <span>
                        <img src={save} alt="" /> Save
                    </span>
                </div>
            </div>
            <hr />
            <Publisher
                imageUrl={jack}
                channel={"GreatStack"}
                subscribeCount={"1M"}
            />
            <div className="vid-description">
                <p>Channel that makes learning easy</p>
                <p>
                    Subscribe GreatStack to Watch More tutorials on web
                    development
                </p>
            </div>
            <hr />
            {data.comments ? (
                <>
                    <h4>{data.comments.length} Comments</h4>
                    {data.comments.map((comment) => (
                        <Comment
                            profileImg={comment.profile_img}
                            fullName={comment.full_name}
                            comment={comment.comment}
                            postedTime={comment.posted_time}
                            likeCount={comment.like_count}
                            dislikeCount={comment.dislike_count}
                        />
                    ))}
                </>
            ) : null}
        </div>
    );
};

export default PlayVideo;
