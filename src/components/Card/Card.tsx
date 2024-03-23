import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

type CardProps = {
    categoryId: number;
    videoId: number;
    imageUrl: string;
    title: string;
    channel: string;
    viewCount: string;
    postedTime: string;
};

const Card = ({
    categoryId,
    videoId,
    imageUrl,
    title,
    channel,
    viewCount,
    postedTime,
}: CardProps) => {
    return (
        <Link to={`/video/${categoryId}/${videoId}`} className="card">
            <img src={imageUrl} alt="" />
            <h2>{title}</h2>
            <h3>{channel}</h3>
            <p>
                {viewCount} views &bull; {postedTime}
            </p>
        </Link>
    );
};

export default Card;
