import React, {useState} from 'react'
import {Box, Flex, Image, Text} from "theme-ui";
import {MovieParams} from "../MoviesList/MoviesList";

import './Table.styles.css'
import {Rating} from "@mui/material";
import {imageUrl} from "../../utils/api";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {ratingForMovies, RatingTypes} from "../../utils/state/MoviesState";


interface TableProps {
    listOfMovies: MovieParams[];
}


const Table = ({listOfMovies}: TableProps) => {
    const setRating = useSetRecoilState(ratingForMovies);

    const addRating = (name: string, rating: number | null) => {
        setRating((oldRating: RatingTypes[]) => [
            ...oldRating,
            {
                name,
                rating,
            }
        ])
    }


    return (
        <>
            { listOfMovies.map((movie) => {
                   return <div className="Wrapper">
                        <div className="FilmPreview">
                            <div className="Poster">
                                <Image src={`${imageUrl}${movie.posterPath}`}
                                        sx={{
                                            width: '100%',
                               }}/>
                            </div>
                            <div className="Description">
                                <div>
                                    <div className="FilmTitle">
                                        <Box>
                                            <Text>{movie.name}</Text>
                                        </Box>
                                        <Box>
                                            <Text>Release date: {movie.releaseDate}</Text>
                                        </Box>
                                    </div>
                                    <div className="AdditionalInformation">
                                        <StarBorderIcon /> {movie.voteAverage}
                                    </div>
                                </div>
                                <div>
                                    <div className="Rating">
                                        <Rating
                                            name="simple-controlled"
                                            // value={getRatingValue(movie.name)}
                                            onChange={(event, newValue) => {addRating(movie.name, newValue)}}/>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                }
            )}
        </>
    )

}

export default Table;