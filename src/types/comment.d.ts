import { PageInfo } from "./index";

export declare module Comment {
    export interface Root {
        kind: string;
        etag: string;
        nextPageToken: string;
        pageInfo: PageInfo;
        items: Item[];
    }

    export interface Item {
        kind: string;
        etag: string;
        id: string;
        snippet: Comment.Snippet;
        replies?: Comment.Replies;
    }

    export interface Snippet {
        channelId: string;
        videoId: string;
        topLevelComment: Comment.TopLevelComment;
        canReply: boolean;
        totalReplyCount: number;
        isPublic: boolean;
    }

    export interface TopLevelComment {
        kind: string;
        etag: string;
        id: string;
        snippet: Comment.CommentSnippet;
    }

    export interface AuthorChannelId {
        value: string;
    }

    export interface Replies {
        comments: Comment.Comment[];
    }

    export interface Comment {
        kind: string;
        etag: string;
        id: string;
        snippet: Comment.CommentSnippet;
    }

    export interface CommentSnippet {
        channelId: string;
        videoId: string;
        textDisplay: string;
        textOriginal: string;
        parentId?: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
        authorChannelUrl: string;
        authorChannelId: Comment.AuthorChannelId;
        canRate: boolean;
        viewerRating: string;
        likeCount: number;
        publishedAt: string;
        updatedAt: string;
    }
}
