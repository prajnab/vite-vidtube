import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import "./playVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import Comment from "../Comment/Comment";
import Publisher from "../Publisher/Publisher";
import { Video } from "../../types/video";
import {
    getChannelData,
    getCommentsData,
    getVideoData,
    valueConverter,
} from "../../services/data.service";
import { Channel } from "../../types/channel";
import { Comment as CommentType } from "../../types/comment";

const PlayVideo = () => {
    const { videoId } = useParams();
    const [videoData, setVideoData] = useState<Video.Item | undefined>();
    const [channelData, setChannelData] = useState<Channel.Item | undefined>();
    const [commentsData, setCommentsData] = useState<
        CommentType.Item[] | undefined
    >();

    const getChannelAPIData = async () => {
        if (videoData?.snippet.channelId == null) {
            setChannelData(undefined);
            return;
        }
        try {
            const data = await getChannelData(videoData!.snippet.channelId);
            setChannelData(data.items[0]);
        } catch {
            // Do nothing
        }
    };

    const getCommentsAPIData = async () => {
        if (videoId == null) {
            setCommentsData(undefined);
            return;
        }
        try {
            const data = await getCommentsData(videoId);
            setCommentsData(data.items);
        } catch {
            // Do nothing
        }
    };

    const getVideoAPIData = async () => {
        if (videoId == null) {
            setVideoData(undefined);
            return;
        }
        try {
            const data = await getVideoData(videoId);
            setVideoData(data.items[0]);
        } catch {
            // Do nothing
        }
    };

    useEffect(() => {
        getVideoAPIData();
        getCommentsAPIData();
    }, [videoId]);

    useEffect(() => {
        getChannelAPIData();
    }, [videoData?.snippet.channelId]);

    return (
        <div className="play-video">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <h3>{videoData?.snippet.title}</h3>
            <div className="play-video-info">
                <p>
                    {valueConverter(videoData?.statistics.viewCount)} views
                    &bull; {moment(videoData?.snippet.publishedAt).fromNow()}
                </p>
                <div>
                    <span>
                        <img src={like} alt="" />{" "}
                        {valueConverter(videoData?.statistics.likeCount)}
                    </span>
                    <span>
                        <img src={dislike} alt="" />{" "}
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
                imageUrl={channelData?.snippet.thumbnails.default.url}
                channel={videoData?.snippet.channelTitle}
                subscribeCount={valueConverter(
                    channelData?.statistics.subscriberCount
                )}
            />
            <div className="vid-description">
                <p>{videoData?.snippet.description.slice(0, 200)}</p>
            </div>
            <hr />
            <h4>
                {valueConverter(videoData?.statistics.commentCount)} Comments
            </h4>
            {commentsData?.length
                ? commentsData.map((comment) => (
                      <Comment
                          profileImg={
                              comment.snippet.topLevelComment.snippet
                                  .authorProfileImageUrl
                          }
                          fullName={
                              comment.snippet.topLevelComment.snippet
                                  .authorDisplayName
                          }
                          comment={
                              comment.snippet.topLevelComment.snippet
                                  .textDisplay
                          }
                          postedTime={moment(
                              comment.snippet.topLevelComment.snippet
                                  .publishedAt
                          ).fromNow()}
                          likeCount={valueConverter(
                              comment.snippet.topLevelComment.snippet.likeCount
                          )}
                      />
                  ))
                : null}
        </div>
    );
};

export default PlayVideo;
