import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "./card.css";
import { valueConverter } from "../../services/data.service";

type CardProps = {
    categoryId: string;
    videoId: string;
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
                {valueConverter(+viewCount)} views &bull;{" "}
                {moment(postedTime).fromNow()}
            </p>
        </Link>
    );
};

export default Card;
