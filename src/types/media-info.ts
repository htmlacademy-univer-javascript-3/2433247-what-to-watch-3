import MediaType from './media-type';

type MediaInfo = {
    id: string;
    title: string;
    type: MediaType;
    releaseDate: string;
    director: string[];
    cast: string[];
    description: string;
    score: number;
    ratings: number;
    genre?: string;
    poster?: string;
    preview?: string;
    mediaLink: string;
}

export default MediaInfo;
