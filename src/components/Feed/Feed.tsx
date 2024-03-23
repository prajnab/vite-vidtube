import React from "react";
import "./feed.css";

import Card from "../Card/Card";
import { videoData } from "../../services/data.service";

const Feed = () => {
    return (
        <div className="feed">
            {videoData.map((item) => (
                <Card
                    key={item.video_id}
                    categoryId={item.category_id}
                    videoId={item.video_id}
                    imageUrl={item.image_url}
                    title={item.title}
                    channel={item.channel}
                    viewCount={item.view_count}
                    postedTime={item.posted_time}
                />
            ))}
        </div>
    );
};

export default Feed;
