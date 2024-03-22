import React from "react";
import "./feed.css";

import Card from "../Card/Card";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

const data = [
    {
        categoryId: 1,
        videoId: 4521,
        image_url: thumbnail1,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        upload_time: "2 days ago",
    },
    {
        categoryId: 2,
        videoId: 3456,
        image_url: thumbnail2,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        upload_time: "2 days ago",
    },
    {
        categoryId: 3,
        videoId: 4345,
        image_url: thumbnail3,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        upload_time: "2 days ago",
    },
    {
        categoryId: 3,
        videoId: 1432,
        image_url: thumbnail4,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        upload_time: "2 days ago",
    },
    {
        categoryId: 4,
        videoId: 9733,
        image_url: thumbnail5,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        upload_time: "2 days ago",
    },
    {
        categoryId: 5,
        videoId: 2890,
        image_url: thumbnail6,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        upload_time: "2 days ago",
    },
    {
        categoryId: 2,
        videoId: 9834,
        image_url: thumbnail7,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        upload_time: "2 days ago",
    },
    {
        categoryId: 2,
        videoId: 3985,
        image_url: thumbnail8,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        upload_time: "2 days ago",
    },
];

const Feed = () => {
    return (
        <div className="feed">
            {data.map((item) => (
                <Card
                    key={item.videoId}
                    categoryId={item.categoryId}
                    videoId={item.videoId}
                    imageUrl={item.image_url}
                    title={item.title}
                    channel={item.channel}
                    viewCount={item.view_count}
                    uploadTime={item.upload_time}
                />
            ))}
        </div>
    );
};

export default Feed;
