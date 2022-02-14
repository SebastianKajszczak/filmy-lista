import React from 'react'
import {useRecoilValue} from "recoil";
import {favouriteMoviesState, toWatchMoviesState} from "../../utils/state/MoviesState";
import Table from "../Table/Table";
import {Box, Grid} from "theme-ui";

const Favourites = () => {
    const toWatchMovies = useRecoilValue(toWatchMoviesState);

    return (
        <Table listOfMovies={toWatchMovies} />
    );
}

export default Favourites;