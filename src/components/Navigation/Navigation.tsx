import {Flex, Box} from "theme-ui";
import React from "react";
import {Link, Outlet} from "react-router-dom";

import './Navigation.styles.css';

const Navigation = () => {
    return (
        <>
            <Flex as="nav" sx={{height: '60px', position:'sticky', top: 0, backgroundColor: 'black', zIndex: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Box p={3}>
                    <Link className="link" to="/">Home</Link>
                </Box>
                <Box p={3}>
                    <Link className="link" to="toWatch">To Watch</Link>
                </Box>
                <Box p={3}>
                    <Link className="link" to="favourites">Favourites</Link>
                </Box>
            </Flex>
            <Outlet />
        </>
    )
};

export default Navigation;


