import { ImageInfo, Localized, PageInfo } from "./index";

export declare module Channel {
    export interface Root {
        kind: string;
        etag: string;
        pageInfo: PageInfo;
        items: Item[];
    }

    export interface Item {
        kind: string;
        etag: string;
        id: string;
        snippet: Channel.Snippet;
        contentDetails: Channel.ContentDetails;
        statistics: Channel.Statistics;
    }

    export interface Snippet {
        title: string;
        description: string;
        customUrl: string;
        publishedAt: string;
        thumbnails: Channel.Thumbnails;
        defaultLanguage: string;
        localized: Localized;
    }

    export interface Thumbnails {
        default: ImageInfo;
        medium: ImageInfo;
        high: ImageInfo;
    }

    export interface ContentDetails {
        relatedPlaylists: RelatedPlaylists;
    }

    export interface RelatedPlaylists {
        likes: string;
        uploads: string;
    }

    export interface Statistics {
        viewCount: string;
        subscriberCount: string;
        hiddenSubscriberCount: boolean;
        videoCount: string;
    }
}
