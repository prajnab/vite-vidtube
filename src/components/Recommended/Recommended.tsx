import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./recommended.css";
import {
    getRecommendedListData,
    valueConverter,
} from "../../services/data.service";
import { Video } from "../../types/video";

type RecommendItemProps = {
    categoryId: string;
    videoId: string;
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
                <p>{valueConverter(props.viewCount)} Views</p>
            </div>
        </Link>
    );
};

const Recommended = () => {
    const { categoryId } = useParams();
    const [recommendedList, setRecommendedList] = useState<
        Video.Item[] | undefined
    >();

    const getVideoAPIData = async () => {
        if (categoryId == null) {
            setRecommendedList(undefined);
            return;
        }
        try {
            const data = await getRecommendedListData(categoryId);
            setRecommendedList(data.items);
        } catch {
            // Do nothing
        }
    };

    useEffect(() => {
        getVideoAPIData();
    }, []);

    return (
        <div className="recommended">
            {recommendedList?.map((item) => (
                <RecommendItem
                    key={item.id}
                    categoryId={item.snippet.categoryId}
                    videoId={item.id}
                    imageUrl={item.snippet.thumbnails.medium.url}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    viewCount={item.statistics.viewCount}
                />
            ))}
        </div>
    );
};

export default Recommended;
