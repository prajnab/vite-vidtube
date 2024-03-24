import React, { useEffect, useState } from "react";
import "./feed.css";

import Card from "../Card/Card";
import { getVideoListData } from "../../services/data.service";
import { Video } from "../../types/video";

type FeedProps = {
    categoryId?: string;
};

const Feed = ({ categoryId }: FeedProps) => {
    const [videoList, setVideoList] = useState<Video.Item[]>([]);

    const getVideoList = async () => {
        if (categoryId == null) {
            setVideoList([]);
            return;
        }
        try {
            const data = await getVideoListData(categoryId);
            setVideoList(data.items);
        } catch {
            throw Error("No Video List");
        }
    };

    useEffect(() => {
        getVideoList();
    }, [categoryId]);

    return (
        <div className="feed">
            {videoList.map((item: Video.Item) => (
                <Card
                    key={item.id}
                    categoryId={item.snippet.categoryId}
                    videoId={item.id}
                    imageUrl={item.snippet.thumbnails.medium.url}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    viewCount={item.statistics.viewCount}
                    postedTime={item.snippet.publishedAt}
                />
            ))}
        </div>
    );
};

export default Feed;
