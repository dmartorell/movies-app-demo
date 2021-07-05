/* eslint-disable camelcase */
interface MediaItem
{
    adult?: boolean,
    backdrop_path: string,
    genre_ids?: [number],
    id: number,
    original_language: string,
    original_title?: string,
    overview: string,
    popularity?: number,
    poster_path: string,
    release_date?: string,
    first_air_date?: string,
    title?: string,
    name?:string,
    video?: boolean,
    vote_average: number,
    vote_count?: number,
}

export default MediaItem;
