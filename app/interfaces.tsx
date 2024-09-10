export interface Media {
    file: File;
    caption: string;
}

export interface PostData {
    title: string;
    date: string;
    media: Array<Media>;
}