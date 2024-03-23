import React from "react";

import "./publisher.css";

type PublisherProps = {
    imageUrl: string;
    channel: string;
    subscribeCount: string;
};

const Publisher = (props: PublisherProps) => {
    return (
        <div className="publisher">
            <img src={props.imageUrl} alt="" />
            <div>
                <p>{props.channel}</p>
                <span>{props.subscribeCount} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
    );
};

export default Publisher;
