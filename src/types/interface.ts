export interface ISong{
    index: number;
    song_name: string;
    song_artist: Array<{name: string}>;
}

export interface IAxiosError{
    response: {
        data: string | IResponseError
        status: number
    }
}

export interface IResponseError{
    error: {
        message: string,
        status: number
    }
}

export interface IFetchSong{
    artists: Array<{name: string, external_urls: {spotify: string}}>;
    name: string;
    album: {images: Array<IAlbumImage>};
    external_urls: {spotify: string}
}

export interface IAlbumImage{
    height: number,
    url: string
}

