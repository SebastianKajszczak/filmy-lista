import {Flex, Box} from "theme-ui";
import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

import './Navigation.styles.css';

const Navigation = () => {
    return (
        <>
            <Flex as="nav" sx={{height: '60px', position:'sticky', top: 0, backgroundColor: 'black', zIndex: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Box p={3}>
                    <NavLink className={(navData) => navData.isActive ? 'activeLink' : 'link'} to="/" >Home</NavLink>
                </Box>
                <Box p={3}>
                    <NavLink  className={(navData) => navData.isActive ? 'activeLink' : 'link'}  to="toWatch">To Watch</NavLink>
                </Box>
                <Box p={3}>
                    <NavLink  className={(navData) => navData.isActive ? 'activeLink' : 'link'}  to="favourites">Favourites</NavLink>
                </Box>
            </Flex>
            <Outlet />
        </>
    )
};

export default Navigation;


