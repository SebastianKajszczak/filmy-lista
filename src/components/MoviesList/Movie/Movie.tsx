import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import api, {imageUrl} from "../../../utils/api";
import {Box, Flex, Image, Spinner, Text} from "theme-ui";

interface MovieTypes {
    adult: boolean,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string
}

const Movie = () => {
    const [movie, setMovie] = useState<MovieTypes>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        api
            .get(`/movie/${id}`)
            .then((data:MovieTypes) => {
                setMovie(data);
                setLoading(false);
            }).catch(error => {
            setError(true);
        });
    }, []);

    return (
        <Flex>
            <Box p={5} bg="muted">
                <Flex p={3} sx={{justifyContent: 'center'}}>
                    {loading && <Spinner />}
                    {movie && <Image src={`${imageUrl}${movie?.poster_path}`}/>}
                </Flex>
                <Flex  p={1} sx={{justifyContent: 'center', fontWeight: 'bold'}}>
                    <Text>{movie?.title}</Text>
                </Flex>
                <Flex p={3} sx={{justifyContent: 'center', textAlign:'center'}}>
                    <Text>{movie?.overview}</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Movie;