import React, { useState, useEffect } from "react";

import api, {imageUrl} from "../../utils/api";
import {Box, Button, Card, Flex, Grid, Image, Spinner, Text} from "theme-ui";
import {useSetRecoilState} from "recoil";
import {favouriteMoviesState, toWatchMoviesState} from "../../utils/state/MoviesState";
import {useNavigate} from "react-router-dom";

interface ResultsTypes {
    adult: boolean;
    backdropPath: string;
    genre_ids: number[];
    budget: number;
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface MoviesListType {
    page: number;
    results: ResultsTypes[];
    totalPages: number;
    totalResults: number;
}

export interface MovieParams {
    id: number;
    name: string;
    voteAverage: number;
    posterPath: string;
    releaseDate: string;
}




export const MoviesList = () => {
    const [movies, setMovies] = useState<ResultsTypes[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false)
    const setFavouriteMovies = useSetRecoilState(favouriteMoviesState);
    const setToWatchMovies = useSetRecoilState(toWatchMoviesState);

    const navigate = useNavigate();


    useEffect(() => {
        api
            .get("/movie/top_rated")
            .then((data:MoviesListType) => {
                setMovies(data.results);
                setLoading(false);
            }).catch(error => {
            setError(true);
        });

    }, []);

    const addFavouriteMovies = (id: number, name: string, voteAverage: number, posterPath: string, releaseDate: string) => {
        setFavouriteMovies((oldFavouriteMovies: MovieParams[]) => [
            ...oldFavouriteMovies,
            {
                id,
                name,
                voteAverage,
                posterPath,
                releaseDate,
            }
        ])
    }

    const addToWatchMovies = (id: number, name: string, voteAverage: number, posterPath: string, releaseDate: string) => {
        setToWatchMovies((oldToWatchMovies: MovieParams[]) =>  [
            ...oldToWatchMovies,
            {
                id,
                name,
                voteAverage,
                posterPath,
                releaseDate,
            }
        ])
    }



    return (
        <>
            {isLoading && <Spinner />}
            {hasError && <p>An error has occurred...</p>}
            <Grid gap={2} sx={{padding: '50px'}} columns={['1fr 1fr 1fr 1fr']}>
            {movies.map(movie => {
                return (
                    <Box key={movie.id} p={3} bg="muted">
                        <Card
                            sx={{
                                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                                maxWidth: 256,
                                ':hover': {
                                    transform: 'scale(1.05)',
                                    cursor: 'pointer'
                                }
                        }}>
                            <Image  onClick={() => navigate(`details/${movie.id}`, { replace: true})} src={`${imageUrl}${movie.poster_path}`}
                               sx={{
                                width: '100%',
                            }}/>
                            <Flex>
                                <Button sx={{':hover': {cursor: 'pointer', backgroundColor: 'hsla(239, 100%, 73%, 0.4)'}, color: 'blue'}} onClick={() => addFavouriteMovies(movie.id, movie.title, movie.vote_average, movie.poster_path, movie.release_date)} mr={1}>Favourite</Button>
                                <Button sx={{':hover': {cursor: 'pointer', backgroundColor: 'hsla(239, 100%, 73%, 0.4)'}, color: 'blue'}} onClick={() => addToWatchMovies(movie.id, movie.title, movie.vote_average, movie.poster_path, movie.release_date)} mr={1}>To Watch</Button>

                            </Flex>
                           </Card>
                </Box>
                )
             })}
            </Grid>
        </>
    )
};
