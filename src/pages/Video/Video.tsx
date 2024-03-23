import React from "react";
import "./video.css";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";
import { getVideoDetails } from "../../services/data.service";

const Video = () => {
    const { categoryId, videoId } = useParams();
    const videoData = getVideoDetails(
        parseInt(categoryId ?? "0"),
        parseInt(videoId ?? "0")
    );

    if (!videoData) {
        throw Error("No data found");
    }

    return (
        <div className="play-container">
            <PlayVideo data={videoData} />
            <Recommended />
        </div>
    );
};

export default Video;
