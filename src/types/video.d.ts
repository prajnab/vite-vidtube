import { ImageInfo, Localized, PageInfo } from "./index";

export declare module Video {
    export interface ItemRoot {
        kind: string;
        etag: string;
        items: Video.Item[];
        pageInfo: PageInfo;
    }

    export interface ListRoot {
        kind: string;
        etag: string;
        items: Video.Item[];
        nextPageToken: string;
        pageInfo: PageInfo;
    }

    export interface Item {
        kind: string;
        etag: string;
        id: string;
        snippet: Video.Snippet;
        contentDetails: Video.ContentDetails;
        statistics: Video.Statistics;
    }

    export interface Snippet {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: Thumbnails;
        channelTitle: string;
        tags?: string[];
        categoryId: string;
        liveBroadcastContent: string;
        localized: Localized;
        defaultLanguage?: string;
        defaultAudioLanguage?: string;
    }

    export interface Thumbnails {
        default: ImageInfo;
        medium: ImageInfo;
        high: ImageInfo;
        standard: ImageInfo;
        maxres?: ImageInfo;
    }

    export interface ContentDetails {
        duration: string;
        dimension: string;
        definition: string;
        caption: string;
        licensedContent: boolean;
        regionRestriction?: RegionRestriction;
        contentRating: ContentRating;
        projection: string;
    }

    export interface RegionRestriction {
        blocked?: string[];
        allowed?: string[];
    }

    export interface ContentRating {}

    export interface Statistics {
        viewCount: string;
        likeCount: string;
        favoriteCount: string;
        commentCount: string;
    }
}
