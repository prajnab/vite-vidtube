import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import user_profile from "../assets/user_profile.jpg";

export type Comment = {
    profile_img: string;
    full_name: string;
    comment: string;
    posted_time: string;
    like_count: number;
    dislike_count: number;
};

export type Video = {
    category_id: number;
    video_id: number;
    image_url: string;
    title: string;
    channel: string;
    view_count: string;
    posted_time: string;
    like_count: number;
    dislike_count: number;
    description: string;
    comments?: Comment[];
};

export const API_KEY = "AIzaSyAFEL7_6aBECzWh5g-1RLqB0DHKvwp2GAM";

const commentData = {
    profile_img: user_profile,
    full_name: "Jack Nicholson",
    comment:
        "A global computer network providing a variety of information and cc of interconnected networks using standardized communication protocols",
    posted_time: "1 day ago",
    like_count: 244,
    dislike_count: 10,
};

export function getVideoDetails(categoryId: number, videoId: number) {
    return videoData.find(
        (item) => item.category_id === categoryId && item.video_id === videoId
    );
}

export const videoData: Video[] = [
    {
        category_id: 1,
        video_id: 4521,
        image_url: thumbnail1,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        posted_time: "2 days ago",
        like_count: 125,
        dislike_count: 2,
        description:
            "Channel that makes learning easy.\nSubscribe GreatStack to Watch More tutorials on web development",
        comments: [commentData, commentData],
    },
    {
        category_id: 2,
        video_id: 3456,
        image_url: thumbnail2,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        posted_time: "2 days ago",
        like_count: 125,
        dislike_count: 2,
        description:
            "Channel that makes learning easy.\nSubscribe GreatStack to Watch More tutorials on web development",
        comments: [commentData, commentData, commentData, commentData],
    },
    {
        category_id: 3,
        video_id: 4345,
        image_url: thumbnail3,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        posted_time: "2 days ago",
        like_count: 125,
        dislike_count: 2,
        description:
            "Channel that makes learning easy.\nSubscribe GreatStack to Watch More tutorials on web development",
        comments: [commentData, commentData, commentData],
    },
    {
        category_id: 3,
        video_id: 1432,
        image_url: thumbnail4,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        posted_time: "2 days ago",
        like_count: 125,
        dislike_count: 2,
        description:
            "Channel that makes learning easy.\nSubscribe GreatStack to Watch More tutorials on web development",
        comments: [
            commentData,
            commentData,
            commentData,
            commentData,
            commentData,
        ],
    },
    {
        category_id: 4,
        video_id: 9733,
        image_url: thumbnail5,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        posted_time: "2 days ago",
        like_count: 125,
        dislike_count: 2,
        description:
            "Channel that makes learning easy.\nSubscribe GreatStack to Watch More tutorials on web development",
        comments: [
            commentData,
            commentData,
            commentData,
            commentData,
            commentData,
            commentData,
            commentData,
        ],
    },
    {
        category_id: 5,
        video_id: 2890,
        image_url: thumbnail6,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        posted_time: "2 days ago",
        like_count: 125,
        dislike_count: 2,
        description:
            "Channel that makes learning easy.\nSubscribe GreatStack to Watch More tutorials on web development",
        comments: [
            commentData,
            commentData,
            commentData,
            commentData,
            commentData,
        ],
    },
    {
        category_id: 2,
        video_id: 9834,
        image_url: thumbnail7,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        posted_time: "2 days ago",
        like_count: 125,
        dislike_count: 2,
        description:
            "Channel that makes learning easy.\nSubscribe GreatStack to Watch More tutorials on web development",
        comments: [commentData, commentData, commentData],
    },
    {
        category_id: 2,
        video_id: 3985,
        image_url: thumbnail8,
        title: "Best channel to learn coding that help you to be a web developer",
        channel: "Greatstack",
        view_count: "15k",
        posted_time: "2 days ago",
        like_count: 125,
        dislike_count: 2,
        description:
            "Channel that makes learning easy.\nSubscribe GreatStack to Watch More tutorials on web development",
        comments: [
            commentData,
            commentData,
            commentData,
            commentData,
            commentData,
        ],
    },
];
