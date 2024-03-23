import React from "react";
import { Link } from "react-router-dom";

import "./recommended.css";
import { videoData } from "../../services/data.service";

type RecommendItemProps = {
    categoryId: number;
    videoId: number;
    imageUrl: string;
    title: string;
    channel: string;
    viewCount: string;
};

const RecommendItem = (props: RecommendItemProps) => {
    return (
        <Link
            to={`/video/${props.categoryId}/${props.videoId}`}
            className="recommend-item"
        >
            <img src={props.imageUrl} alt="" />
            <div className="vid-info">
                <h4>{props.title}</h4>
                <p>{props.channel}</p>
                <p>{props.viewCount} Views</p>
            </div>
        </Link>
    );
};

const Recommended = () => {
    return (
        <div className="recommended">
            {videoData.map((item) => (
                <RecommendItem
                    key={item.video_id}
                    categoryId={item.category_id}
                    videoId={item.video_id}
                    imageUrl={item.image_url}
                    title={item.title}
                    channel={item.channel}
                    viewCount={item.view_count}
                />
            ))}
        </div>
    );
};

export default Recommended;
