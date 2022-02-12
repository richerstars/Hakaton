import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { AuthContext } from 'src/components/context/AuthContext';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {StNav} from "./style";

const linksToTournament = [
    {
        id: 1,
        url: '/openTournament',
        title: 'Open',
    },
    {
        id: 2,
        url: '/activeTournament',
        title: 'Active',
    },
    {
        id: 3,
        url: '/finishedTournament',
        title: 'Finished',
    }
];

// const linksToCup = [
//     {
//         id: 1,
//         url: '/openCup',
//         title: 'Open',
//     },
//     {
//         id: 2,
//         url: '/activeCup',
//         title: 'Active',
//     },
//     {
//         id: 3,
//         url: '/finishedCup',
//         title: 'Finished',
//     }
// ];

const NavBar = () => {
    const { pathname } = useLocation();
    return (
        <StNav>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {linksToTournament.map(({ id, url, title }) => {
                    return (
                        <Button key={id} variant={url === pathname ? "contained" : "outlined"}>
                            <NavLink key={id} to={url}>
                                {title}
                            </NavLink>
                        </Button>
                    );
                })}
            </ButtonGroup>
        </StNav>
    );};

export default NavBar;