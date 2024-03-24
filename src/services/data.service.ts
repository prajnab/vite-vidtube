import { Video } from "../types/video";
import { Channel } from "../types/channel";
import { Comment } from "../types/comment";

export const API_KEY = "AIzaSyAFEL7_6aBECzWh5g-1RLqB0DHKvwp2GAM";

export async function getVideoListData(categoryId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?videoCategoryId=${categoryId}&maxResults=50&chart=mostPopular&part=snippet%2C%20contentDetails%2C%20statistics&regionCode=US&key=${API_KEY}`;

    return fetch(url).then(
        (response) => response.json() as Promise<Video.ListRoot>
    );
}

export async function getVideoData(videoId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&regionCode=US&id=${videoId}&key=${API_KEY}`;

    return fetch(url).then(
        (response) => response.json() as Promise<Video.ItemRoot>
    );
}

export async function getChannelData(channelId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails%2C%20statistics&id=${channelId}&key=${API_KEY}`;

    return fetch(url).then(
        (response) => response.json() as Promise<Channel.Root>
    );
}

export async function getCommentsData(videoId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&videoId=${videoId}&key=${API_KEY}`;

    return fetch(url).then(
        (response) => response.json() as Promise<Comment.Root>
    );
}

export async function getRecommendedListData(categoryId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?videoCategoryId=${categoryId}&maxResults=50&chart=mostPopular&part=snippet%2C%20contentDetails%2C%20statistics&regionCode=US&key=${API_KEY}`;

    return fetch(url).then(
        (response) => response.json() as Promise<Video.ListRoot>
    );
}

export const valueConverter = (value: string | number = 0) => {
    value = +value;
    if (value > 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    if (value > 1000) {
        return Math.floor(value / 1000) + "K";
    }
    return value + "";
};
