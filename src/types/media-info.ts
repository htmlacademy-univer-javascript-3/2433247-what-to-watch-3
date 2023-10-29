import MediaType from './media-type';

type MediaInfo = {
    name: string;
    type?: MediaType;
    date?: string;
    genre?: string;
    poster?: string;
    preview?: string;
}

export default MediaInfo;
