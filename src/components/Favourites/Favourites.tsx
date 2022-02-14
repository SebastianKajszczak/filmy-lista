import React, {useState} from 'react'
import {useRecoilValue} from "recoil";
import {favouriteMoviesState} from "../../utils/state/MoviesState";
import Table from "../Table/Table";

const Favourites = () => {
    const favouriteMovies = useRecoilValue(favouriteMoviesState);

    return <Table listOfMovies={favouriteMovies}/>
}

export default Favourites;