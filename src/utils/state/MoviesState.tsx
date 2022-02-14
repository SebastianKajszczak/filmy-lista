import {atom} from "recoil";
import {MovieParams} from "../../components/MoviesList/MoviesList";

export interface RatingTypes {
    name: string;
    rating: number | null;
}

export const favouriteMoviesState = atom<MovieParams[]>({
    key: 'favouriteMovies',
    default: [],
});

export const toWatchMoviesState = atom<MovieParams[]>({
    key: 'toWatchMovies',
    default: []
})

export const ratingForMovies = atom<RatingTypes[]>({
    key: 'rating',
    default: []
})
