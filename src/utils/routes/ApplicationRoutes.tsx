import React from 'react'
import { Routes, Route} from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import {MoviesList} from "../../components/MoviesList/MoviesList";
import Movie from "../../components/MoviesList/Movie/Movie";
import Favourites from "../../components/Favourites/Favourites";
import ToWatch from "../../components/ToWatch/ToWatch";

const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<MoviesList />} />
                <Route path="toWatch" element={<ToWatch />} />
                <Route path="favourites" element={<Favourites />} />
                <Route path="details/:id" element={<Movie />} />
                {/*<Route path="*" element={null} />*/}
            </Route>
        </Routes>
    )
}

export default ApplicationRoutes;