export type RootLayoutContextType = {
    sidebar: boolean;
    categoryId?: string;
};

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface ImageInfo {
    url: string;
    width: number;
    height: number;
}

export interface Localized {
    title: string;
    description: string;
}
